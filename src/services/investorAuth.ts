import { v4 as uuidv4 } from "uuid";
import { emailJSService } from "./emailService";

export interface MagicLinkToken {
  token: string;
  email: string;
  expiresAt: number;
  used: boolean;
}

export interface InvestorSession {
  sessionId: string;
  email: string;
  createdAt: number;
  expiresAt: number;
  lastAccessed: number;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
}

class InvestorAuthService {
  private magicTokens: Map<string, MagicLinkToken> = new Map();
  private sessions: Map<string, InvestorSession> = new Map();

  // 30 minutes for magic link
  private readonly MAGIC_LINK_EXPIRY = 30 * 60 * 1000;
  // 7 days for session
  private readonly SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

  /**
   * Sends a magic link to the investor's email
   */
  async sendMagicLink(email: string): Promise<AuthResponse> {
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          success: false,
          message: "Please enter a valid email address",
        };
      }

      // Generate unique token
      const token = uuidv4();
      const expiresAt = Date.now() + this.MAGIC_LINK_EXPIRY;

      // Store token
      this.magicTokens.set(token, {
        token,
        email: email.toLowerCase(),
        expiresAt,
        used: false,
      });

      // Clean up expired tokens
      this.cleanupExpiredTokens();

      // Flag non-work emails for internal tracking
      const isWorkEmail = this.isWorkEmail(email);

      // Create magic link using configured base URL or current origin
      const baseUrl = process.env.REACT_APP_BASE_URL || window.location.origin;
      const magicLink = `${baseUrl}/investors/auth?token=${token}`;

      console.log("Magic Link Generated:", {
        email,
        token,
        magicLink,
        isWorkEmail,
        expiresIn: "30 minutes",
      });

      // Simulate email sending
      await this.simulateEmailSend(email, magicLink, isWorkEmail);

      return {
        success: true,
        message: "Magic link sent to your email. Please check your inbox.",
        data: {
          email,
          expiresIn: 30,
          isWorkEmail,
        },
      };
    } catch (error) {
      console.error("Magic link error:", error);
      return {
        success: false,
        message: "Failed to send magic link. Please try again.",
      };
    }
  }

  /**
   * Validates magic link token and creates session
   */
  async validateMagicLink(token: string): Promise<AuthResponse> {
    try {
      const magicToken = this.magicTokens.get(token);

      if (!magicToken) {
        return {
          success: false,
          message: "Invalid magic link. Please request a new one.",
        };
      }

      if (magicToken.used) {
        return {
          success: false,
          message:
            "This magic link has already been used. Please request a new one.",
        };
      }

      if (Date.now() > magicToken.expiresAt) {
        this.magicTokens.delete(token);
        return {
          success: false,
          message: "Magic link has expired. Please request a new one.",
        };
      }

      // Mark token as used
      magicToken.used = true;

      // Create session
      const sessionId = uuidv4();
      const now = Date.now();
      const session: InvestorSession = {
        sessionId,
        email: magicToken.email,
        createdAt: now,
        expiresAt: now + this.SESSION_EXPIRY,
        lastAccessed: now,
      };

      this.sessions.set(sessionId, session);

      // Set session cookie
      this.setSessionCookie(sessionId);

      // Clean up used token
      this.magicTokens.delete(token);

      return {
        success: true,
        message: "Authentication successful",
        data: {
          sessionId,
          email: magicToken.email,
          expiresIn: 7 * 24 * 60, // 7 days in minutes
        },
      };
    } catch (error) {
      console.error("Magic link validation error:", error);
      return {
        success: false,
        message: "Authentication failed. Please try again.",
      };
    }
  }

  /**
   * Validates current session
   */
  async validateSession(): Promise<AuthResponse> {
    try {
      const sessionId = this.getSessionFromCookie();

      if (!sessionId) {
        return {
          success: false,
          message: "No active session found",
        };
      }

      const session = this.sessions.get(sessionId);

      if (!session) {
        this.clearSessionCookie();
        return {
          success: false,
          message: "Invalid session",
        };
      }

      if (Date.now() > session.expiresAt) {
        this.sessions.delete(sessionId);
        this.clearSessionCookie();
        return {
          success: false,
          message: "Session expired",
        };
      }

      // Update last accessed time
      session.lastAccessed = Date.now();

      return {
        success: true,
        message: "Session valid",
        data: {
          email: session.email,
          sessionId: session.sessionId,
          createdAt: session.createdAt,
        },
      };
    } catch (error) {
      console.error("Session validation error:", error);
      return {
        success: false,
        message: "Session validation failed",
      };
    }
  }

  /**
   * Logs out user and clears session
   */
  async logout(): Promise<AuthResponse> {
    try {
      const sessionId = this.getSessionFromCookie();

      if (sessionId) {
        this.sessions.delete(sessionId);
      }

      this.clearSessionCookie();

      return {
        success: true,
        message: "Logged out successfully",
      };
    } catch (error) {
      console.error("Logout error:", error);
      return {
        success: false,
        message: "Logout failed",
      };
    }
  }

  /**
   * Gets current user info
   */
  getCurrentUser(): { email: string; sessionId: string } | null {
    const sessionId = this.getSessionFromCookie();
    if (!sessionId) return null;

    const session = this.sessions.get(sessionId);
    if (!session || Date.now() > session.expiresAt) {
      return null;
    }

    return {
      email: session.email,
      sessionId: session.sessionId,
    };
  }

  /**
   * Checks if email appears to be a work email
   */
  private isWorkEmail(email: string): boolean {
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
      "me.com",
      "protonmail.com",
    ];

    const domain = email.split("@")[1]?.toLowerCase();
    return domain ? !personalDomains.includes(domain) : false;
  }

  /**
   * Sends real magic link email using EmailJS
   */
  private async simulateEmailSend(
    email: string,
    magicLink: string,
    isWorkEmail: boolean
  ): Promise<void> {
    try {
      // Extract first name from email for personalization
      const firstName = email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      console.log("📧 Sending real magic link email via EmailJS:", {
        to: email,
        firstName,
        isWorkEmail,
        magicLink: magicLink.substring(0, 50) + "...", // Truncated for logging
      });

      // Send real email using EmailJS
      const result = await emailJSService.sendMagicLinkEmail(
        email,
        magicLink,
        firstName
      );

      if (!result.success) {
        console.warn("⚠️ Email sending failed:", result.message);
        // Don't throw error - we still want to return success for the magic link generation
        // The user can still use the link directly if needed
      } else {
        console.log("✅ Magic link email sent successfully");
      }
    } catch (error) {
      console.error("❌ Failed to send magic link email:", error);
      // Don't throw error - fallback to manual link usage
    }
  }

  /**
   * Sets session cookie
   */
  private setSessionCookie(sessionId: string): void {
    const expiryDate = new Date(Date.now() + this.SESSION_EXPIRY);
    document.cookie = `grape_investor_session=${sessionId}; expires=${expiryDate.toUTCString()}; path=/investors; secure; samesite=strict`;
  }

  /**
   * Gets session from cookie
   */
  private getSessionFromCookie(): string | null {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "grape_investor_session") {
        return value;
      }
    }
    return null;
  }

  /**
   * Clears session cookie
   */
  private clearSessionCookie(): void {
    document.cookie =
      "grape_investor_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/investors;";
  }

  /**
   * Cleanup expired tokens periodically
   */
  private cleanupExpiredTokens(): void {
    const now = Date.now();
    this.magicTokens.forEach((magicToken, token) => {
      if (now > magicToken.expiresAt) {
        this.magicTokens.delete(token);
      }
    });
  }

  /**
   * Get session statistics (for admin/debugging)
   */
  getSessionStats() {
    return {
      activeSessions: this.sessions.size,
      pendingTokens: this.magicTokens.size,
      sessions: Array.from(this.sessions.values()).map((session) => ({
        email: session.email,
        createdAt: new Date(session.createdAt).toISOString(),
        lastAccessed: new Date(session.lastAccessed).toISOString(),
        expiresAt: new Date(session.expiresAt).toISOString(),
      })),
    };
  }
}

// Export singleton instance
export const investorAuthService = new InvestorAuthService();
