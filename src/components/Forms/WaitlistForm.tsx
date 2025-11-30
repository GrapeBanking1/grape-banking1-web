import React, { useState, useEffect } from "react";

import { emailJSService } from "../../services/emailService";
import "./WaitlistForm.css";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  userType: "consumer" | "investor" | "partner" | "media" | "";
  // Investor fields
  investmentAmount: string;
  investmentAmountCustom: string;
  stagePreference: "pre-seed" | "seed" | "series-a" | "";
  accredited: "yes" | "no" | "prefer-not-to-say" | "";
  interests: string[];
  additionalFeedback: string;
  // Consent
  agreedToTerms: boolean;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  investmentAmount?: string;
  additionalFeedback?: string;
  agreedToTerms?: string;
  general?: string;
}

interface WaitlistFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    userType: "",
    investmentAmount: "",
    investmentAmountCustom: "",
    stagePreference: "",
    accredited: "",
    interests: [],
    additionalFeedback: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "South Korea",
    "Singapore",
    "Netherlands",
    "Switzerland",
    "Other",
  ];

  const investmentRanges = [
    "$1K - $5K",
    "$5K - $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K+",
    "Custom amount",
  ];

  const interestOptions = [
    "AI insights",
    "Safety",
    "Transparent fees",
    "Card",
    "Transfers",
    "Other",
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // First name validation
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (
      formData.firstName.length < 2 ||
      formData.firstName.length > 40
    ) {
      newErrors.firstName = "First name must be between 2 and 40 characters";
    }

    // Investment amount validation for investors
    if (
      formData.userType === "investor" &&
      formData.investmentAmount === "Custom amount"
    ) {
      if (!formData.investmentAmountCustom) {
        newErrors.investmentAmount = "Please specify your investment amount";
      } else if (
        isNaN(Number(formData.investmentAmountCustom.replace(/[,$]/g, "")))
      ) {
        newErrors.investmentAmount = "Please enter a valid number";
      }
    }

    // Additional feedback validation
    if (formData.additionalFeedback.length > 300) {
      newErrors.additionalFeedback =
        "Feedback must be less than 300 characters";
    }

    // Terms agreement validation
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the Privacy Policy & Terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update rate limit info on component mount
  // No longer using rate limiting - EmailJS handles everything

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Prepare form data for EmailJS
      const formDataForEmail = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        userType: formData.userType,
        investmentAmount: formData.investmentAmount,
        investmentAmountCustom: formData.investmentAmountCustom,
        stagePreference: formData.stagePreference,
        accredited: formData.accredited,
        interests: formData.interests,
        additionalFeedback: formData.additionalFeedback,
        agreedToTerms: formData.agreedToTerms,
      };

      // Determine source based on current page
      const source = window.location.pathname.includes("features")
        ? "features-page"
        : window.location.pathname.includes("download")
        ? "download-page"
        : window.location.pathname.includes("early-access")
        ? "early-access"
        : "waitlist";

      // Send email notification to grape@grapebanking.com
      await emailJSService.sendWaitlistNotification(formDataForEmail, source);

      // Form submitted successfully
      setIsSubmitted(true);

      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          country: "",
          userType: "",
          investmentAmount: "",
          investmentAmountCustom: "",
          stagePreference: "",
          accredited: "",
          interests: [],
          additionalFeedback: "",
          agreedToTerms: false,
        });
        if (onClose) onClose();
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`waitlist-form ${isModal ? "waitlist-form--modal" : ""}`}>
        <div className="form-success">
          <div className="success-icon">🎉</div>
          <h3>Welcome to Grape!</h3>
          <p>
            {formData.userType === "investor"
              ? "Thank you for your investment interest. We'll be in touch soon with next steps."
              : "You're on our waitlist! We'll notify you when Grape is ready for early access."}
          </p>
          <div className="success-details">
            <p>Check your email for confirmation and next steps.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`waitlist-form ${isModal ? "waitlist-form--modal" : ""}`}>
      <div className="form-container">
        <div className="form-header">
          <h2>Join Grape</h2>
          <p>Be part of the future of banking</p>
        </div>

        <form onSubmit={handleSubmit} className="waitlist-form-content">
          {errors.general && (
            <div className="form-error-banner">{errors.general}</div>
          )}

          {/* Basic Information */}
          <div className="form-section">
            <h3>Basic Information</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "error" : ""}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={errors.firstName ? "error" : ""}
                  placeholder="John"
                  maxLength={40}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Doe"
                  maxLength={40}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* User Type */}
          <div className="form-section">
            <h3>I'm here as</h3>
            <div className="radio-group">
              {[
                {
                  value: "consumer",
                  label: "Consumer",
                  desc: "I want to use Grape for personal banking",
                },
                {
                  value: "investor",
                  label: "Investor",
                  desc: "I'm interested in investing in Grape",
                },
                {
                  value: "partner",
                  label: "Partner",
                  desc: "I'm exploring partnership opportunities",
                },
                {
                  value: "media",
                  label: "Media",
                  desc: "I'm covering Grape for press/media",
                },
              ].map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="userType"
                    value={option.value}
                    checked={formData.userType === option.value}
                    onChange={(e) => handleChange("userType", e.target.value)}
                  />
                  <div className="radio-content">
                    <div className="radio-label">{option.label}</div>
                    <div className="radio-desc">{option.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Investor-specific fields */}
          {formData.userType === "investor" && (
            <div className="form-section investor-section">
              <h3>Investment Details</h3>

              <div className="form-group">
                <label>How much are you considering? (USD)</label>
                <div className="investment-grid">
                  {investmentRanges.map((range) => (
                    <label key={range} className="checkbox-option">
                      <input
                        type="radio"
                        name="investmentAmount"
                        value={range}
                        checked={formData.investmentAmount === range}
                        onChange={(e) =>
                          handleChange("investmentAmount", e.target.value)
                        }
                      />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>

                {formData.investmentAmount === "Custom amount" && (
                  <div className="custom-amount">
                    <input
                      type="text"
                      placeholder="Enter amount (e.g., $500,000)"
                      value={formData.investmentAmountCustom}
                      onChange={(e) =>
                        handleChange("investmentAmountCustom", e.target.value)
                      }
                      className={errors.investmentAmount ? "error" : ""}
                    />
                  </div>
                )}
                {errors.investmentAmount && (
                  <span className="error-message">
                    {errors.investmentAmount}
                  </span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Stage preference</label>
                  <select
                    value={formData.stagePreference}
                    onChange={(e) =>
                      handleChange("stagePreference", e.target.value)
                    }
                  >
                    <option value="">Select stage</option>
                    <option value="pre-seed">Pre-seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Are you an accredited investor?</label>
                  <select
                    value={formData.accredited}
                    onChange={(e) => handleChange("accredited", e.target.value)}
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Interests */}
          <div className="form-section">
            <h3>What excites you most?</h3>
            <div className="checkbox-grid">
              {interestOptions.map((interest) => (
                <label key={interest} className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Feedback */}
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="feedback">
                What else do you want to see from us?
              </label>
              <textarea
                id="feedback"
                value={formData.additionalFeedback}
                onChange={(e) =>
                  handleChange("additionalFeedback", e.target.value)
                }
                placeholder="Tell us about features, partnerships, or anything else you'd like to see..."
                maxLength={300}
                rows={4}
                className={errors.additionalFeedback ? "error" : ""}
              />
              <div className="char-count">
                {formData.additionalFeedback.length}/300
              </div>
              {errors.additionalFeedback && (
                <span className="error-message">
                  {errors.additionalFeedback}
                </span>
              )}
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="form-section">
            <label className="checkbox-option terms-checkbox">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  handleChange("agreedToTerms", e.target.checked)
                }
              />
              <span>
                I agree to the{" "}
                <a href="/legal/privacy" target="_blank">
                  Privacy Policy
                </a>{" "}
                &{" "}
                <a href="/legal/terms" target="_blank">
                  Terms
                </a>{" "}
                *
              </span>
            </label>
            {errors.agreedToTerms && (
              <span className="error-message">{errors.agreedToTerms}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <span className="loading">
                  <span className="spinner"></span>
                  Submitting...
                </span>
              ) : formData.userType === "investor" ? (
                "Submit Investment Interest"
              ) : (
                "Join Waitlist"
              )}
            </button>
          </div>

          <div className="form-footer">
            <p>
              Protected by reCAPTCHA. We'll only send you updates about Grape.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
