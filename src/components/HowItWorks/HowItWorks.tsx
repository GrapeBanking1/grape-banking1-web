import React, { useEffect, useRef } from "react";
import "./HowItWorks.css";

export const HowItWorks: React.FC = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const steps = [
    {
      number: "01",
      title: "Download & Sign Up",
      description:
        "Download the Grape app and create your account in under 2 minutes",
      icon: "📱",
    },
    {
      number: "02",
      title: "Verify Your Identity",
      description: "Quick verification using AI-powered document scanning",
      icon: "✅",
    },
    {
      number: "03",
      title: "Add Your Cards",
      description: "Link your existing cards or get a new Grape virtual card",
      icon: "💳",
    },
    {
      number: "04",
      title: "Start Banking",
      description: "Enjoy seamless banking with advanced security and insights",
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
          <p>Get started with Grape in 4 simple steps</p>
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
