import React, { useEffect, useRef } from "react";
import "./ValueProps.css";

export const ValueProps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const props = [
    {
      icon: "🔐",
      title: "Multi-Layer Security & Cyber Protection",
      subtitle: "Security is foundational to Grape's architecture.",
      points: [
        "Bank-grade encryption for data in transit and at rest",
        "Secure authentication, including biometric support on compatible devices",
        "Continuous transaction monitoring to identify unusual patterns",
        "Infrastructure designed around modern risk-management principles",
      ],
      conclusion:
        "Your financial activity is protected by multiple layers—not a single control point.",
    },
    {
      icon: "💡",
      title: "Smart Insights with Scribe AI",
      subtitle: "Money should be understandable, not overwhelming.",
      points: [
        "Clear breakdowns of transactions and balances",
        "Spending patterns and behavioral insights over time",
        "Intelligent prompts designed to highlight what matters most",
        "Educational guidance focused on awareness and better decision-making",
      ],
      conclusion:
        "Scribe AI supports users with insights and education—it does not replace user control.",
    },
    {
      icon: "🌍",
      title: "Global-Ready Payments & Access",
      subtitle: "Designed for modern, connected lifestyles.",
      points: [
        "Send and receive money across supported regions",
        "Transparent records and easy-to-review transaction history",
        "Built to integrate with regulated financial and payment partners",
        "Suitable for both personal and business use cases",
      ],
      conclusion:
        "Whether local or international, Grape prioritizes simplicity and transparency.",
    },
    {
      icon: "⚡",
      title: "Fast Transactions & Real-Time Visibility",
      subtitle: "Stay informed at every step.",
      points: [
        "Near-instant transfers where supported",
        "Real-time balance updates and transaction statuses",
        "Live notifications for account activity",
        "Clear records designed for easy tracking and reconciliation",
      ],
      conclusion: "No guessing. Just clear, real-time financial visibility.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="value-props" ref={sectionRef}>
      <div className="container">
        <div className="value-props__header">
          <h2>Why Choose Grape?</h2>
          <p>
            A financial platform designed for clarity, security, and long-term
            trust. Grape is built to reduce confusion around money while giving
            users greater visibility into how their finances work—without
            sacrificing speed or usability.
          </p>
        </div>

        <div className="value-props__grid">
          {props.map((prop, index) => (
            <div
              key={index}
              className="value-prop"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-prop__icon">{prop.icon}</div>
              <h3 className="value-prop__title">{prop.title}</h3>
              <p className="value-prop__subtitle">{prop.subtitle}</p>
              <ul className="value-prop__points">
                {prop.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              <p className="value-prop__conclusion">{prop.conclusion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
