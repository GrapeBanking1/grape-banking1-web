import React, { useState, useEffect } from "react";
import { emailJSService } from "../services/emailService";
import "./EmailSetup.css";

interface EmailJSSetupProps {
  onConfigured?: () => void;
  showInstructions?: boolean;
}

export const EmailJSSetup: React.FC<EmailJSSetupProps> = ({
  onConfigured,
  showInstructions = true,
}) => {
  const [config, setConfig] = useState({
    serviceId: "",
    templateId: "",
    publicKey: "",
    fromEmail: "investors@grapebanking.com",
    fromName: "Grape Banking",
  });
  const [isConfigured, setIsConfigured] = useState(false);
  const [showSetup, setShowSetup] = useState(false);

  useEffect(() => {
    // Load current configuration
    const currentConfig = emailJSService.getConfig();
    setConfig({
      serviceId: currentConfig.serviceId,
      templateId: currentConfig.templateId,
      publicKey: "", // Don't show the full key for security
      fromEmail: currentConfig.fromEmail || "investors@grapebanking.com",
      fromName: currentConfig.fromName || "Grape Banking",
    });

    // Check if already configured
    setIsConfigured(
      currentConfig.serviceId !== "service_grape_inv" &&
        currentConfig.templateId !== "template_magic_link"
    );
  }, []);

  const handleConfigUpdate = () => {
    if (config.serviceId && config.templateId && config.publicKey) {
      emailJSService.updateConfig(config);
      setIsConfigured(true);
      onConfigured?.();
      alert(
        "✅ EmailJS configured successfully! Magic links will now send real emails."
      );
    } else {
      alert("❌ Please fill in all fields");
    }
  };

  const testConfiguration = async () => {
    const result = await emailJSService.testConfiguration();
    alert(
      result.success ? "✅ Configuration test passed" : "❌ " + result.message
    );
  };

  if (isConfigured && !showSetup) {
    return (
      <div className="email-status configured">
        <div className="status-indicator">
          <span className="status-icon">✅</span>
          <span>EmailJS Configured - Real emails enabled</span>
        </div>
        <button className="reconfigure-btn" onClick={() => setShowSetup(true)}>
          Reconfigure
        </button>
      </div>
    );
  }

  return (
    <div className="emailjs-setup">
      {!isConfigured && (
        <div className="email-status not-configured">
          <div className="status-indicator">
            <span className="status-icon">⚠️</span>
            <span>EmailJS not configured - Using console logging only</span>
          </div>
          <button className="setup-btn" onClick={() => setShowSetup(true)}>
            Setup Real Emails
          </button>
        </div>
      )}

      {showSetup && (
        <div className="setup-panel">
          <div className="setup-header">
            <h3>📧 EmailJS Configuration</h3>
            <p>Configure EmailJS to send real magic link emails</p>
          </div>

          <div className="config-form">
            <div className="form-group">
              <label>Service ID</label>
              <input
                type="text"
                value={config.serviceId}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, serviceId: e.target.value }))
                }
                placeholder="service_xxxxxxx"
                className="config-input"
              />
            </div>

            <div className="form-group">
              <label>Template ID</label>
              <input
                type="text"
                value={config.templateId}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, templateId: e.target.value }))
                }
                placeholder="template_xxxxxxx"
                className="config-input"
              />
            </div>

            <div className="form-group">
              <label>Public Key</label>
              <input
                type="password"
                value={config.publicKey}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, publicKey: e.target.value }))
                }
                placeholder="Your EmailJS public key"
                className="config-input"
              />
            </div>

            {/* Professional Email Settings */}
            <div className="form-group">
              <label>From Email (Professional)</label>
              <input
                type="email"
                value={config.fromEmail}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, fromEmail: e.target.value }))
                }
                placeholder="investors@grapebanking.com"
                className="config-input"
              />
            </div>

            <div className="form-group">
              <label>From Name (Professional)</label>
              <input
                type="text"
                value={config.fromName}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, fromName: e.target.value }))
                }
                placeholder="Grape Banking"
                className="config-input"
              />
            </div>

            <div className="setup-actions">
              <button className="save-btn" onClick={handleConfigUpdate}>
                Save Configuration
              </button>
              <button className="test-btn" onClick={testConfiguration}>
                Test Config
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowSetup(false)}
              >
                Cancel
              </button>
            </div>
          </div>

          {showInstructions && (
            <div className="setup-instructions">
              <h4>📋 Setup Instructions</h4>
              <div className="instructions-list">
                {emailJSService.getSetupInstructions().map((step) => (
                  <div key={step.step} className="instruction-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h5>{step.title}</h5>
                      <p>{step.description}</p>
                      {step.action && (
                        <a
                          href={
                            step.action.startsWith("http") ? step.action : "#"
                          }
                          target={
                            step.action.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel="noopener noreferrer"
                          className="step-action"
                        >
                          {step.action}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="template-example">
                <h5>📝 Email Template Example</h5>
                <div className="template-code">
                  <pre>{`From: {{from_name}} <{{from_email}}>
Subject: Access Your Grape Investor Portal

Hello {{to_name}},

Welcome to the Grape Banking Investor Portal.

Click the link below to access your secure dashboard:
{{magic_link}}

This secure link expires in {{expires_in}} for your protection.

Best regards,
{{from_name}}
{{from_email}}
{{company_url}}

Variables available:
- {{to_name}} - Investor's name
- {{to_email}} - Investor's email  
- {{magic_link}} - Authentication link
- {{expires_in}} - Expiration time
- {{from_name}} - Your professional name
- {{from_email}} - Your professional email
- {{company_url}} - https://grapebanking.com`}</pre>
                </div>

                <h5>
                  📋 Waitlist Notification Template (for grape@grapebanking.com)
                </h5>
                <div className="template-code">
                  <pre>{`From: {{from_name}} <{{from_email}}>
To: grape@grapebanking.com
Subject: {{subject}}

New {{user_type}} signup from your website!

👤 Contact Details:
Name: {{first_name}} {{last_name}}
Email: {{email}}
Country: {{country}}
User Type: {{user_type}}

💼 Investment Details (if investor):
Investment Amount: {{investment_amount}} {{investment_amount_custom}}
Stage Preference: {{stage_preference}}
Accredited: {{accredited}}

🎯 Interests: {{interests}}

💬 Additional Feedback:
{{additional_feedback}}

📊 Submission Info:
Source: {{source}}
Date: {{submission_date}}

---
Sent from {{company_url}}`}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailJSSetup;
