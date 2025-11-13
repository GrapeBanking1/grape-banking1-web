import React from "react";
import "./SocialProof.css";

export const SocialProof: React.FC = () => {
  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "$2.5B+", label: "Transactions Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9★", label: "App Store Rating" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Entrepreneur",
      content:
        "Grape has revolutionized how I manage my finances. The AI insights are incredibly accurate.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      role: "Digital Nomad",
      content:
        "Perfect for international transfers. Fast, secure, and cost-effective.",
      avatar: "👨‍💻",
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      content:
        "The business features help me track expenses effortlessly. Highly recommended!",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section className="social-proof">
      <div className="container">
        {/* Stats Section */}
        <div className="stats">
          <div className="stats__header">
            <h2>Trusted by millions worldwide</h2>
          </div>
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat__number">{stat.number}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <div className="testimonials__header">
            <h3>What our users say</h3>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="testimonial__content">
                  "{testimonial.content}"
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial__info">
                    <div className="testimonial__name">{testimonial.name}</div>
                    <div className="testimonial__role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
