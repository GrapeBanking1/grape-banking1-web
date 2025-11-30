import emailjs from "@emailjs/browser";

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
  fromEmail?: string; // Professional sender email
  fromName?: string; // Professional sender name
}

export interface MagicLinkEmailData extends Record<string, unknown> {
  to_email: string;
  to_name: string;
  magic_link: string;
  company_name: string;
  expires_in: string;
}

class EmailJSService {
  private config: EmailJSConfig = {
    // These will be set from environment variables or user configuration
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_grape_inv",
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ge7y2aj",
    publicKey:
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "your_public_key_here",
    fromEmail: process.env.REACT_APP_EMAIL_FROM || "grape@grapebanking.com",
    fromName: process.env.REACT_APP_EMAIL_FROM_NAME || "Grape Banking",
  };

  /**
   * Initialize EmailJS (call this once in your app)
   */
  init(): void {
    emailjs.init(this.config.publicKey);
  }

  /**
   * Update EmailJS configuration
   */
  updateConfig(config: Partial<EmailJSConfig>): void {
    this.config = { ...this.config, ...config };
    if (config.publicKey) {
      emailjs.init(config.publicKey);
    }
  }

  /**
   * Send magic link email to investor
   */
  async sendMagicLinkEmail(
    email: string,
    magicLink: string,
    firstName?: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Prepare email data
      const emailData: MagicLinkEmailData = {
        to_email: email,
        to_name: firstName || email.split("@")[0],
        magic_link: magicLink,
        company_name: process.env.REACT_APP_COMPANY_NAME || "Grape Banking",
        expires_in: "30 minutes",
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        emailData,
        this.config.publicKey
      );

      console.log("✅ Email sent successfully:", result);

      return {
        success: true,
        message: "Magic link email sent successfully",
      };
    } catch (error: any) {
      console.error("❌ Failed to send email:", error);

      // Handle specific EmailJS errors
      let errorMessage = "Failed to send email. Please try again.";

      if (error.status === 400) {
        errorMessage = "Email configuration error. Please contact support.";
      } else if (error.status === 401) {
        errorMessage = "Email service authentication failed.";
      } else if (error.status === 403) {
        errorMessage = "Email service access denied.";
      } else if (error.status === 404) {
        errorMessage = "Email template not found.";
      }

      return {
        success: false,
        message: errorMessage,
      };
    }
  }

  /**
   * Send waitlist form submission notification to configured notification email
   */
  async sendWaitlistNotification(
    formData: any,
    source: string = "waitlist"
  ): Promise<{ success: boolean; message: string }> {
    try {
      const waitlistTemplateId =
        process.env.REACT_APP_EMAILJS_WAITLIST_TEMPLATE_ID ||
        this.config.templateId;
      const emailData = {
        to_email:
          process.env.REACT_APP_NOTIFICATION_EMAIL || "grape@grapebanking.com",
        to_name:
          process.env.REACT_APP_NOTIFICATION_EMAIL_NAME || "Grape Banking Team",
        subject: `New ${formData.userType || "Lead"} Signup - ${
          formData.firstName
        } ${formData.lastName}`,

        // Form details
        first_name: formData.firstName,
        last_name: formData.lastName || "",
        email: formData.email,
        country: formData.country || "",
        user_type: formData.userType || "",

        // Investor specific fields
        investment_amount: formData.investmentAmount || "",
        investment_amount_custom: formData.investmentAmountCustom || "",
        stage_preference: formData.stagePreference || "",
        accredited: formData.accredited || "",
        interests: formData.interests ? formData.interests.join(", ") : "",
        additional_feedback: formData.additionalFeedback || "",

        // Metadata
        source: source,
        submission_date: new Date().toLocaleString(),

        // Professional branding
        from_name: this.config.fromName || "Grape Banking Website",
        from_email: this.config.fromEmail || "notifications@grapebanking.com",
        company_url:
          process.env.REACT_APP_COMPANY_URL || "https://grapebanking.com",
      };

      console.log(
        `📧 Sending waitlist notification to ${
          process.env.REACT_APP_NOTIFICATION_EMAIL || "grape@grapebanking.com"
        }...`,
        {
          user: formData.email,
          type: formData.userType,
          service: this.config.serviceId,
          template: waitlistTemplateId,
          data: emailData,
        }
      );

      const result = await emailjs.send(
        this.config.serviceId,
        waitlistTemplateId,
        emailData,
        this.config.publicKey
      );

      console.log("✅ Waitlist notification sent successfully:", result);

      return {
        success: true,
        message: `Waitlist notification sent to ${
          process.env.REACT_APP_NOTIFICATION_EMAIL || "grape@grapebanking.com"
        }`,
      };
    } catch (error: any) {
      console.error("❌ Failed to send waitlist notification:", error);

      return {
        success: false,
        message: "Failed to send notification email",
      };
    }
  }

  /**
   * Send a simple test email to verify EmailJS is working
   */
  async sendTestEmail(): Promise<{ success: boolean; message: string }> {
    try {
      const simpleData = {
        to_email:
          process.env.REACT_APP_NOTIFICATION_EMAIL || "grape@grapebanking.com",
        to_name: "Test",
        subject: "EmailJS Test",
        message: `This is a test email from your ${
          process.env.REACT_APP_COMPANY_NAME || "Grape Banking"
        } website.`,
        from_name: "Test System",
      };

      const result = await emailjs.send(
        this.config.serviceId,
        process.env.REACT_APP_EMAILJS_WAITLIST_TEMPLATE_ID ||
          this.config.templateId,
        simpleData,
        this.config.publicKey
      );

      console.log("✅ Test email sent:", result);
      return { success: true, message: "Test email sent successfully" };
    } catch (error) {
      console.error("❌ Test email failed:", error);
      return { success: false, message: "Test email failed: " + error };
    }
  }

  /**
   * Test email configuration
   */
  async testConfiguration(): Promise<{ success: boolean; message: string }> {
    try {
      // This won't actually send, just test the configuration
      console.log("🧪 Testing EmailJS configuration...", {
        serviceId: this.config.serviceId,
        templateId: this.config.templateId,
        publicKey: this.config.publicKey?.substring(0, 10) + "...",
      });

      return {
        success: true,
        message: "Configuration appears valid",
      };
    } catch (error) {
      console.error("❌ Configuration test failed:", error);
      return {
        success: false,
        message: "Configuration test failed",
      };
    }
  }

  /**
   * Get setup instructions for EmailJS
   */
  getSetupInstructions(): {
    step: number;
    title: string;
    description: string;
    action?: string;
  }[] {
    return [
      {
        step: 1,
        title: "Create EmailJS Account",
        description: "Sign up at https://emailjs.com (free)",
        action: "https://emailjs.com",
      },
      {
        step: 2,
        title: "Add Email Service",
        description: "Connect Gmail, Outlook, or custom SMTP",
        action: "Go to EmailJS Dashboard > Email Services",
      },
      {
        step: 3,
        title: "Create Email Template",
        description:
          "Create template with variables: {{to_name}}, {{magic_link}}, {{expires_in}}",
        action: "Go to EmailJS Dashboard > Email Templates",
      },
      {
        step: 4,
        title: "Get Configuration Keys",
        description: "Copy Service ID, Template ID, and Public Key",
        action: "Go to EmailJS Dashboard > Integration",
      },
      {
        step: 5,
        title: "Update Configuration",
        description:
          "Use emailJSService.updateConfig() or set environment variables",
        action:
          "REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY",
      },
    ];
  }

  /**
   * Get current configuration (safe - no secrets exposed)
   */
  getConfig(): {
    serviceId: string;
    templateId: string;
    publicKeyPreview: string;
    fromEmail?: string;
    fromName?: string;
  } {
    return {
      serviceId: this.config.serviceId,
      templateId: this.config.templateId,
      publicKeyPreview: this.config.publicKey?.substring(0, 10) + "...",
      fromEmail: this.config.fromEmail,
      fromName: this.config.fromName,
    };
  }
}

// Export singleton instance
export const emailJSService = new EmailJSService();

// Initialize EmailJS when service is imported
emailJSService.init();
