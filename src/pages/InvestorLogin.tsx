import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { investorAuthService } from "../services/investorAuth";
import "./InvestorLogin.css";

export const InvestorLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleMagicLinkAuth = async (token: string) => {
      setIsSubmitting(true);
      try {
        const result = await investorAuthService.validateMagicLink(token);

        if (result.success) {
          setMessage("Authentication successful! Redirecting to dashboard...");
          setIsSuccess(true);

          // Redirect to dashboard after brief delay
          setTimeout(() => {
            navigate("/investors/dashboard", { replace: true });
          }, 1500);
        } else {
          setMessage(result.message);
          setIsSuccess(false);
        }
      } catch (error) {
        setMessage("Authentication failed. Please try again.");
        setIsSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Check if user is already authenticated
    const checkAuth = async () => {
      const result = await investorAuthService.validateSession();
      if (result.success) {
        navigate("/investors/dashboard", { replace: true });
      }
    };

    checkAuth();

    // Handle magic link token if present
    const token = searchParams.get("token");
    if (token) {
      handleMagicLinkAuth(token);
    }
  }, [navigate, searchParams, setIsSubmitting, setMessage, setIsSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address");
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const result = await investorAuthService.sendMagicLink(email);

      setMessage(result.message);
      setIsSuccess(result.success);

      if (result.success) {
        setEmail(""); // Clear form on success
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="investor-login">
      {/* SEO blocking headers */}
      <div style={{ display: "none" }}>
        <meta name="robots" content="noindex, nofollow" />
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="grape-logo">🍇</div>
            <h1>Investor Portal</h1>
            <p>Access exclusive investor resources and updates</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investor@company.com"
                required
                className="email-input"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="magic-link-btn"
            >
              {isSubmitting ? (
                <span className="loading">
                  <span className="spinner"></span>
                  {searchParams.get("token")
                    ? "Authenticating..."
                    : "Sending Magic Link..."}
                </span>
              ) : (
                "Send Magic Link"
              )}
            </button>

            {message && (
              <div className={`message ${isSuccess ? "success" : "error"}`}>
                {isSuccess && <span className="success-icon">✅</span>}
                {!isSuccess && <span className="error-icon">⚠️</span>}
                {message}
              </div>
            )}
          </form>

          <div className="login-footer">
            <p>
              A magic link will be sent to your email address.
              <br />
              Links expire after 30 minutes for security.
            </p>

            <div className="security-note">
              <span className="security-icon">🔒</span>
              <span>Secured by enterprise-grade authentication</span>
            </div>
          </div>
        </div>

        <div className="login-background">
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default InvestorLogin;
