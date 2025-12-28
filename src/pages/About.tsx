import React from "react";

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      description:
        "Former fintech engineer at Stripe. Believes banking should be as intuitive as sending a text message.",
      image: "👨‍💻",
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      description:
        "AI/ML expert from Google. Passionate about making financial AI that actually helps people make better decisions.",
      image: "👩‍💻",
    },
    {
      name: "Jordan Kim",
      role: "Head of Product",
      description:
        "Former design lead at Square. Obsessed with turning complex financial processes into delightful experiences.",
      image: "👨‍🎨",
    },
  ];

  const principles = [
    {
      title: "Security first",
      description:
        "Your financial safety is non-negotiable. Every feature is built with security as the foundation.",
      icon: "🔒",
    },
    {
      title: "Clarity over complexity",
      description:
        "Financial products shouldn't require a PhD to understand. We make everything crystal clear.",
      icon: "💡",
    },
    {
      title: "Human help when it matters",
      description:
        "AI handles the routine stuff. Humans are here for the moments that really count.",
      icon: "🤝",
    },
  ];

  return (
    <div
      style={{
        padding: "120px 20px 80px",
        background:
          "linear-gradient(180deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "24px",
              background: "linear-gradient(135deg, #ff6b9d, #845ec2, #4e9eff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "700",
            }}
          >
            About & Mission
          </h1>
        </div>

        {/* Mission Statement */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "60px 40px",
            borderRadius: "30px",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "32px",
              background: "linear-gradient(135deg, #845ec2, #ff6b9d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "600",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            To redefine how people interact with money—making finance clearer,
            safer, and more intelligent for everyone.
          </p>
        </div>

        {/* Story Section */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "60px 40px",
            borderRadius: "30px",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "32px",
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            Our Vision
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            To redefine how people interact with money—making finance clearer,
            safer, and more intelligent for everyone.
          </p>
        </div>

        {/* Principles Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "60px",
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            Our Principles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {principles.map((principle, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                  {principle.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "16px",
                    color: "#ffffff",
                    fontWeight: "600",
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: "1.6",
                  }}
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "60px",
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            Meet the Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "20px",
                    filter: "grayscale(20%)",
                  }}
                >
                  {member.image}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "8px",
                    color: "#ffffff",
                    fontWeight: "600",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(132, 94, 194, 0.9)",
                    marginBottom: "16px",
                    fontWeight: "500",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: "1.6",
                  }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers CTA */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "30px",
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at center, rgba(132, 94, 194, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "24px",
              color: "#ffffff",
              fontWeight: "600",
              position: "relative",
              zIndex: 1,
            }}
          >
            Join Our Mission
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "32px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Interested in building Grape? We're looking for passionate people to
            help shape the future of banking.
          </p>
          <a
            href="mailto:careers@grapebanking.com"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "linear-gradient(135deg, #845ec2, #ff6b9d)",
              border: "none",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "1.1rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s ease",
              position: "relative",
              zIndex: 1,
              cursor: "pointer",
            }}
          >
            careers@grapebanking.com
          </a>
        </div>
      </div>
    </div>
  );
};
