import React, { useState } from "react";
import { InlineForm } from "../components/Forms/InlineForm";
import "./Features.css";

export const Features: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const features = [
    {
      category: "Scribe AI™",
      description:
        "Your intelligent financial assistant that makes money decisions obvious and safe",
      items: [
        {
          title: "Auto-Categorization",
          description:
            "Automatically sorts your spending into smart categories without manual input",
          icon: "🏷️",
        },
        {
          title: "Proactive Nudges",
          description:
            "Get helpful alerts before you overspend or miss important financial opportunities",
          icon: "�",
        },
        {
          title: "Explain My Spend",
          description:
            "Ask Scribe AI to break down your spending patterns in plain English",
          icon: "💬",
        },
        {
          title: "Goal Coach",
          description:
            "AI-powered guidance to help you reach your financial goals faster",
          icon: "🎯",
        },
      ],
    },
    {
      category: "Smart Payments",
      description:
        "Lightning-fast payments with built-in intelligence to save you money",
      items: [
        {
          title: "Instant P2P",
          description: "Send money to friends instantly without fees or delays",
          icon: "⚡",
        },
        {
          title: "Card Controls",
          description:
            "Smart card management with spending limits and merchant controls",
          icon: "💳",
        },
        {
          title: "Travel Mode",
          description:
            "Automatic currency handling and travel-friendly payment settings",
          icon: "✈️",
        },
        {
          title: "Fee-Avoidance Hints",
          description: "Get warned about potential fees before they happen",
          icon: "�",
        },
      ],
    },
    {
      category: "Budgeting Without the Homework",
      description:
        "Effortless budgeting that works automatically in the background",
      items: [
        {
          title: "Auto-Budgets",
          description:
            "Intelligent budgets that adapt to your spending patterns automatically",
          icon: "📊",
        },
        {
          title: "Left to Spend",
          description: "Real-time view of how much you can safely spend today",
          icon: "💵",
        },
        {
          title: "30-Day Runway",
          description:
            "See exactly how long your money will last at your current spending rate",
          icon: "📅",
        },
        {
          title: "Smart Insights",
          description:
            "Understand your money patterns without complex charts or graphs",
          icon: "🧠",
        },
      ],
    },
    {
      category: "Safety",
      description:
        "Advanced security that protects you without getting in your way",
      items: [
        {
          title: "Real-time Fraud Flags",
          description:
            "Instant alerts for suspicious activity with smart false-positive reduction",
          icon: "�️",
        },
        {
          title: "Biometrics",
          description:
            "Secure authentication using Face ID, Touch ID, and voice recognition",
          icon: "👆",
        },
        {
          title: "Device Trust",
          description:
            "Your devices learn your patterns to provide seamless yet secure access",
          icon: "📱",
        },
        {
          title: "Virtual Cards",
          description:
            "Generate secure virtual cards for online shopping and subscriptions",
          icon: "💳",
        },
      ],
    },
    {
      category: "Transparency",
      description: "Complete clarity about your money with no hidden surprises",
      items: [
        {
          title: "Plain-Language Statements",
          description:
            "Financial statements that actually make sense to real people",
          icon: "�",
        },
        {
          title: "Fee Clarifier",
          description:
            "Every fee explained in simple terms with a 'why this fee?' breakdown",
          icon: "❓",
        },
        {
          title: "Real-Time Updates",
          description:
            "See your balance and transactions update instantly, always accurate",
          icon: "🔄",
        },
        {
          title: "No Fine Print",
          description:
            "All terms and conditions written in clear, understandable language",
          icon: "📋",
        },
      ],
    },
    {
      category: "Coming Soon",
      description:
        "Exciting features on our roadmap that will make Grape even more powerful",
      items: [
        {
          title: "Round-ups to Goals",
          description:
            "Automatically round up purchases and save the change toward your goals",
          icon: "🎯",
        },
        {
          title: "Subscription Killer",
          description:
            "AI that finds and cancels forgotten subscriptions you're not using",
          icon: "❌",
        },
        {
          title: "Verified Merchants",
          description:
            "Shop with confidence using our verified merchant network",
          icon: "✅",
        },
        {
          title: "Smart Investing",
          description:
            "AI-guided investment suggestions tailored to your financial situation",
          icon: "📈",
        },
      ],
    },
  ];

  return (
    <div className="features-page">
      <div className="container">
        <div className="features-hero">
          <h1>Features</h1>
          <p className="features-intro">
            Grape is a consumer banking experience powered by Scribe AI™ and
            modern infrastructure—so everyday money decisions become obvious,
            safe, and fast.
          </p>
        </div>

        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="feature-category">
            <div className="category-header">
              <h2>{category.category}</h2>
              <p className="category-description">{category.description}</p>
            </div>

            <div className="features-grid">
              {category.items.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-cta">
                    <button className="mini-cta-button" onClick={openModal}>
                      Join Early Access
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="features-cta">
          <h2>Ready to experience the future of banking?</h2>
          <p>
            Join thousands of users who are already banking smarter with Grape
          </p>
          <button className="cta-button" onClick={openModal}>
            Join Early Access
          </button>
        </div>

        {/* Modal for InlineForm */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <InlineForm
                isModal={true}
                useEnhanced={true}
                onClose={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
