import React, { useState } from "react";
import { InlineForm } from "../components/Forms/InlineForm";
import "./Features.css";

export const Features: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const features = [
    {
      category: "Security",
      items: [
        {
          title: "Multi-Layer Encryption",
          description: "Bank-grade AES-256 encryption protects all your data",
          icon: "🔐",
        },
        {
          title: "Biometric Authentication",
          description:
            "Face ID, Touch ID, and voice recognition for secure access",
          icon: "👆",
        },
        {
          title: "Real-time Fraud Detection",
          description:
            "AI-powered system monitors for suspicious activities 24/7",
          icon: "🛡️",
        },
        {
          title: "Zero-Knowledge Architecture",
          description: "We can't see your data even if we wanted to",
          icon: "🔒",
        },
      ],
    },
    {
      category: "AI Intelligence",
      items: [
        {
          title: "Smart Spending Insights",
          description:
            "Personalized analysis of your spending patterns and habits",
          icon: "📊",
        },
        {
          title: "Predictive Budgeting",
          description: "AI forecasts your future expenses and suggests budgets",
          icon: "🎯",
        },
        {
          title: "Investment Recommendations",
          description: "Tailored investment suggestions based on your goals",
          icon: "📈",
        },
        {
          title: "Bill Prediction",
          description: "Never miss a payment with intelligent bill forecasting",
          icon: "⏰",
        },
      ],
    },
    {
      category: "Global Banking",
      items: [
        {
          title: "Multi-Currency Support",
          description: "Hold and exchange 150+ currencies at real-time rates",
          icon: "💱",
        },
        {
          title: "Instant International Transfers",
          description: "Send money worldwide in seconds, not days",
          icon: "🌍",
        },
        {
          title: "Local Payment Methods",
          description:
            "Pay like a local anywhere with regional payment support",
          icon: "💳",
        },
        {
          title: "Travel Mode",
          description:
            "Automatic currency conversion and travel-friendly features",
          icon: "✈️",
        },
      ],
    },
  ];

  return (
    <div className="features-page">
      <div className="container">
        <div className="features-hero">
          <h1>Powerful Features</h1>
          <p>
            Discover the cutting-edge technology that makes Grape the smartest
            choice for digital banking
          </p>
        </div>

        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="feature-category">
            <div className="category-header">
              <h2>{category.category}</h2>
            </div>

            <div className="features-grid">
              {category.items.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="features-cta">
          <h2>Ready to experience the future?</h2>
          <p>
            Join thousands of users who are already banking smarter with Grape
          </p>
          <button className="cta-button" onClick={openModal}>
            Join Waitlist
          </button>
        </div>

        {/* Modal for InlineForm */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <InlineForm isModal={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
