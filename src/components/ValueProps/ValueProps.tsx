import React, { useEffect, useRef } from "react";
import "./ValueProps.css";

export const ValueProps: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const props = [
    {
      icon: "🔐",
      title: "Multi-Layer Security",
      description:
        "Bank-grade encryption with biometric authentication and fraud detection",
    },
    {
      icon: "💡",
      title: "Smart AI Insights",
      description:
        "Personalized spending insights and recommendations powered by AI",
    },
    {
      icon: "🌍",
      title: "Global Access",
      description:
        "Send and receive money worldwide with competitive exchange rates",
    },
    {
      icon: "⚡",
      title: "Instant Transactions",
      description: "Lightning-fast transfers and real-time notifications",
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
            Experience the future of digital banking with our innovative
            features
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
              <p className="value-prop__description">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
