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
        "Your intelligent financial assistant that makes money decisions obvious and safe. Scribe AI™ works quietly in the background to help users understand spending, anticipate issues, and make better financial choices—without requiring constant input.",
      items: [
        {
          title: "Auto-Categorization",
          description:
            "Automatically organizes transactions into smart categories so users always know where their money is going—no manual tagging required.",
          icon: "🏷️",
        },
        {
          title: "Proactive Nudges",
          description:
            "Helpful, timely alerts designed to warn users before they overspend, miss a bill, or run into avoidable financial friction.",
          icon: "�",
        },
        {
          title: "Explain My Spend",
          description:
            "Ask Scribe AI™ questions like “Why did I spend more this month?” and receive clear, plain-English explanations—no charts required.",
          icon: "💬",
        },
        {
          title: "Goal Coach",
          description:
            "AI-powered guidance that helps users stay on track toward savings, spending, or personal financial goals with adaptive suggestions.",
          icon: "🎯",
        },
      ],
    },
    {
      category: "Smart Payments",
      description:
        "Fast payments with built-in intelligence. Payments on Grape aren’t just fast—they’re informed, controlled, and transparent.",
      items: [
        {
          title: "Instant P2P",
          description:
            "Send money to friends and family instantly, with real-time confirmation and no unnecessary delays.",
          icon: "⚡",
        },
        {
          title: "Card Controls",
          description:
            "Set spending limits, control merchant categories, and manage cards in real time directly from the app.",
          icon: "💳",
        },
        {
          title: "Travel Mode",
          description:
            "Automatically adjusts payment settings when traveling, including currency handling and security preferences.",
          icon: "✈️",
        },
        {
          title: "Fee-Avoidance Hints",
          description:
            "Get notified before potential fees occur, helping users avoid unnecessary charges before they happen.",
          icon: "�",
        },
      ],
    },
    {
      category: "Budgeting Without the Homework",
      description:
        "Effortless budgeting that runs in the background. Grape removes the friction of traditional budgeting by making it automatic and adaptive.",
      items: [
        {
          title: "Auto-Budgets",
          description:
            "Budgets that intelligently adjust based on real spending behavior—not rigid rules.",
          icon: "📊",
        },
        {
          title: "Left to Spend",
          description:
            "A real-time view of how much money is safe to spend today, after accounting for upcoming obligations",
          icon: "💵",
        },
        {
          title: "30-Day Runway",
          description:
            "See how long current balances will last at your present spending pace—updated dynamically.",
          icon: "📅",
        },
        {
          title: "Smart Insights",
          description:
            "Understand financial patterns clearly without complex dashboards or overwhelming data.",
          icon: "🧠",
        },
      ],
    },
    {
      category: "Safety",
      description:
        "Advanced protection that stays out of your way. Security is built into the platform—not layered on top.",
      items: [
        {
          title: "Real-time Fraud Flags",
          description:
            "Instant alerts for suspicious activity, with intelligent filtering designed to reduce false positives.",
          icon: "�️",
        },
        {
          title: "Biometrics",
          description:
            "Secure access using Face ID, Touch ID, and other supported biometric technologies.",
          icon: "👆",
        },
        {
          title: "Device Trust",
          description:
            "Recognizes trusted devices and usage patterns to maintain security without constant friction.",
          icon: "📱",
        },
        {
          title: "Virtual Cards",
          description:
            "Generate secure virtual cards for online purchases, subscriptions, and one-time payments.",
          icon: "💳",
        },
      ],
    },
    {
      category: "Transparency",
      description:
        "No hidden fees. No confusing language. No surprises.\nGrape is designed to make financial information understandable to real people.",
      items: [
        {
          title: "Plain-Language Statements",
          description:
            "Statements written so users can actually understand what happened with their money.",
          icon: "�",
        },
        {
          title: "Fee Clarifier",
          description:
            "Every fee explained clearly, including why it exists and when it applies.",
          icon: "❓",
        },
        {
          title: "Real-Time Updates",
          description:
            "Balances and transactions update instantly, providing an always-accurate view of finances.",
          icon: "🔄",
        },
        {
          title: "No Fine Print",
          description:
            "Terms and conditions written in clear, human language—not legal riddles.",
          icon: "📋",
        },
      ],
    },
    {
      category: "Coming Soon",
      description:
        "The next phase of intelligent finance. Features currently on the roadmap to expand the Grape ecosystem.",
      items: [
        {
          title: "Round-ups to Goals",
          description:
            "Automatically round up purchases and save the difference toward personalized goals.",
          icon: "🎯",
        },
        {
          title: "Subscription Killer",
          description:
            "AI that identifies unused subscriptions and helps users cancel what they don’t need.",
          icon: "❌",
        },
        {
          title: "Verified Merchants",
          description:
            "A trusted merchant network designed to reduce fraud and improve confidence when spending.",
          icon: "✅",
        },
        {
          title: "Smart Investing",
          description:
            "AI-guided investment insights tailored to a user’s financial profile and risk awareness.(Educational guidance only.)",
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
            Grape is a modern consumer banking experience powered by Scribe AI™
            and secure, scalable infrastructure—so everyday money decisions
            become obvious, safe, and fast.
          </p>
          <p className="features-intro">
            Every feature is designed to reduce friction, remove guesswork, and
            give users confidence in how they manage their money.
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
            Join early users who are choosing clarity, control, and smarter
            money decisions with Grape.
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
