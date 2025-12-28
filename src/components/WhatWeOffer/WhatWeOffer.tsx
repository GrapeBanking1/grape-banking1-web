import React, { useEffect, useRef } from "react";
import "./WhatWeOffer.css";

export const WhatWeOffer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const offerings = [
    "AI-powered mobile wallet",
    "Fast, secure payment processing",
    "Advanced fraud detection and cybersecurity",
    "Transaction insights explained in plain language",
    "Personalized financial guidance and education",
    "Optional financial consulting services",
    "Scribe AI avatar inspired by the Eye of Horus",
    "Designed for Millennials and Gen Z, trusted by all ages",
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
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-we-offer" ref={sectionRef}>
      <div className="container">
        <div className="what-we-offer__header">
          <h2>What We Offer</h2>
          <p>Grape is more than a wallet—it's a growing financial ecosystem.</p>
        </div>

        <div className="what-we-offer__content">
          <ul className="offerings-list">
            {offerings.map((offering, index) => (
              <li
                key={index}
                className="offering-item"
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {offering}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
