import React, { useState } from "react";
import "./InlineForm.css";

interface FormData {
  email: string;
  fullName: string;
  phone: string;
}

interface InlineFormProps {
  isModal?: boolean;
}

export const InlineForm: React.FC<InlineFormProps> = ({ isModal = false }) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setFormData({ email: "", fullName: "", phone: "" });
    }, 3000);
  };

  const isValid = formData.email && formData.fullName && formData.phone;

  if (isSubmitted) {
    return (
      <section className={`inline-form ${isModal ? 'inline-form--modal' : ''}`}>
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
    <section className={`inline-form ${isModal ? 'inline-form--modal' : ''}`}>
      <div className="container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Join the Waitlist</h2>
            <p>
              Be among the first to experience the future of digital banking
            </p>
          </div>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="spinner"></span>
                    Joining...
                  </span>
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
