import React, { useEffect, useRef } from "react";
import "./SocialProof.css";

export const SocialProof: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    if (statsRef.current) observer.observe(statsRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

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
        <div className="stats" ref={statsRef}>
          <div className="stats__header">
            <h2>Trusted by millions worldwide</h2>
          </div>
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat__number">{stat.number}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials" ref={testimonialsRef}>
          <div className="testimonials__header">
            <h3>What our users say</h3>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
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
