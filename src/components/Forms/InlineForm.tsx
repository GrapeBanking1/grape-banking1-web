import React, { useState, useEffect, useRef } from "react";
import { WaitlistForm } from "./WaitlistForm";
import "./InlineForm.css";

interface FormData {
  email: string;
  fullName: string;
  excitement: string;
  extraFieldValue: string;
}

interface InlineFormProps {
  isModal?: boolean;
  isMini?: boolean;
  extraField?: string;
  useEnhanced?: boolean;
  onClose?: () => void;
}

export const InlineForm: React.FC<InlineFormProps> = ({
  isModal = false,
  isMini = false,
  extraField,
  useEnhanced = false,
  onClose,
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    excitement: "",
    extraFieldValue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isModal) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      if (formRef.current) observer.observe(formRef.current);

      return () => observer.disconnect();
    }
  }, [isModal]);

  // If enhanced form is requested, use the comprehensive WaitlistForm
  if (useEnhanced) {
    return <WaitlistForm isModal={isModal} onClose={onClose} />;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: "",
        fullName: "",
        excitement: "",
        extraFieldValue: "",
      });
    }, 3000);
  };

  const isValid =
    formData.email &&
    formData.fullName &&
    (isMini ? formData.extraFieldValue : formData.excitement);

  if (isSubmitted) {
    return (
      <section className={`inline-form ${isModal ? "inline-form--modal" : ""}`}>
        <div className="container">
          <div className="form-success">
            <div className="success-icon">✅</div>
            <h3>Thank you for joining!</h3>
            <p>
              You're on the waitlist. We'll notify you when Grape is available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`inline-form ${isModal ? "inline-form--modal" : ""}`}>
      <div className="container">
        <div className="form-wrapper" ref={formRef}>
          <div className="form-header">
            <h2>{isMini ? "Join Early Access" : "Join the Waitlist"}</h2>
            <p>
              {isMini
                ? "Get notified when this feature launches"
                : "Be among the first to experience the future of digital banking"}
            </p>
          </div>

          <form className="inline-waitlist-form" onSubmit={handleSubmit}>
            <div className="inline-form-grid">
              <div className="inline-form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="inline-form-input"
                />
              </div>

              <div className="inline-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="inline-form-input"
                />
              </div>

              {!isMini && (
                <div className="inline-form-group">
                  <select
                    name="excitement"
                    value={formData.excitement}
                    onChange={handleChange}
                    required
                    className="inline-form-input"
                  >
                    <option value="" disabled>
                      What excites you most?
                    </option>
                    <option value="ai-spending">
                      AI-powered spending insights
                    </option>
                    <option value="goal-tracking">Smart goal tracking</option>
                    <option value="budgeting">Automated budgeting</option>
                    <option value="savings">High-yield savings</option>
                    <option value="security">Bank-level security</option>
                    <option value="simplicity">Simple, beautiful design</option>
                  </select>
                </div>
              )}

              {isMini && extraField && (
                <div className="inline-form-group">
                  <input
                    type="text"
                    name="extraFieldValue"
                    placeholder={extraField}
                    value={formData.extraFieldValue}
                    onChange={handleChange}
                    required
                    className="inline-form-input"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="inline-submit-btn"
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="spinner"></span>
                    Joining...
                  </span>
                ) : isMini ? (
                  "Join Early Access"
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>

            <p className="form-disclaimer">
              By joining, you agree to our Terms of Service and Privacy Policy.
              We'll only send you updates about Grape.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
