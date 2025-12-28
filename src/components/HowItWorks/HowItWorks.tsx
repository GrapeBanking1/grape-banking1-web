import React, { useEffect, useRef } from "react";
import "./HowItWorks.css";

export const HowItWorks: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const steps = [
    {
      number: "01",
      title: "Download & Create an Accountp",
      description:
        "Download the Grape app and complete a guided signup designed for speed and security.",
      icon: "📱",
    },
    {
      number: "02",
      title: "Verify Your Identity",
      description:
        "Complete a secure identity verification process using modern verification technology.",
      icon: "✅",
    },
    {
      number: "03",
      title: "Add Payment Methods",
      description:
        "Link existing cards or use a Grape virtual card for everyday digital payments.",
      icon: "💳",
    },
    {
      number: "04",
      title: "Start Using Grape",
      description:
        "Send, receive, and manage money while gaining clearer insight into your financial activity.",
      icon: "🚀",
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
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <h2>How It Works</h2>
          <p>Getting started with Grape is simple and intuitive.</p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step"
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step__number">{step.number}</div>
              <div className="step__icon">{step.icon}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step__connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
