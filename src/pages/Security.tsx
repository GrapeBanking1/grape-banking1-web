import React from "react";

export const Security: React.FC = () => {
  const securityFeatures = [
    {
      category: "Data Protection",
      description:
        "Your information is protected with enterprise-grade security measures",
      items: [
        {
          title: "Encryption in Transit & at Rest",
          description:
            "All data is encrypted using AES-256 encryption both when stored and transmitted",
          icon: "🔐",
        },
        {
          title: "Tokenization",
          description:
            "Sensitive data is replaced with secure tokens, making it useless if intercepted",
          icon: "🎫",
        },
        {
          title: "Least-Privilege Access",
          description:
            "Systems and people only have access to the minimum data needed for their function",
          icon: "🔑",
        },
        {
          title: "Regular Security Audits",
          description:
            "Independent security firms regularly test our systems for vulnerabilities",
          icon: "🔍",
        },
      ],
    },
    {
      category: "Identity & Fraud Prevention",
      description:
        "Multi-layered protection against identity theft and fraudulent activity",
      items: [
        {
          title: "Know Your Customer (KYC)",
          description:
            "Rigorous identity verification process to prevent fraud and comply with regulations",
          icon: "👤",
        },
        {
          title: "Device Fingerprinting",
          description:
            "Your devices are recognized to detect suspicious login attempts",
          icon: "📱",
        },
        {
          title: "Behavior Analytics",
          description:
            "AI monitors your typical patterns to flag unusual activity instantly",
          icon: "🧠",
        },
        {
          title: "Card Controls",
          description:
            "Instant card locks, spending limits, and merchant category controls",
          icon: "💳",
        },
      ],
    },
    {
      category: "Compliance & Regulations",
      description: "We meet or exceed all financial regulatory requirements",
      items: [
        {
          title: "FinCEN MSB Registration",
          description:
            "Registered Money Services Business with the Financial Crimes Enforcement Network",
          icon: "🏛️",
        },
        {
          title: "KYC/AML Program",
          description:
            "Comprehensive Know Your Customer and Anti-Money Laundering compliance program",
          icon: "📋",
        },
        {
          title: "SOC 2 Roadmap",
          description:
            "Working toward SOC 2 Type II certification for operational security controls",
          icon: "✅",
        },
        {
          title: "GDPR/CCPA Alignment",
          description:
            "Full compliance with global privacy regulations and data protection laws",
          icon: "🌍",
        },
      ],
    },
    {
      category: "Your Control",
      description:
        "You have complete control over your data and privacy settings",
      items: [
        {
          title: "Export Your Data",
          description:
            "Download all your data in standard formats anytime you want",
          icon: "📥",
        },
        {
          title: "Delete Request Process",
          description:
            "Simple process to permanently delete your account and all associated data",
          icon: "🗑️",
        },
        {
          title: "Privacy Settings",
          description:
            "Granular controls over what data is shared and how it's used",
          icon: "⚙️",
        },
        {
          title: "Transparency Reports",
          description:
            "Regular reports on data requests, security incidents, and compliance metrics",
          icon: "📊",
        },
      ],
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
            Security & Compliance
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Bank-grade security meets plain-English transparency. Here's exactly
            how we protect your money and privacy.
          </p>
        </div>

        {/* Security Features */}
        {securityFeatures.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: "100px" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  color: "#ffffff",
                  position: "relative",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                {category.category}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(135deg, #845ec2, #ff6b9d)",
                    borderRadius: "2px",
                  }}
                />
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.6)",
                  maxWidth: "700px",
                  margin: "16px auto 0",
                  lineHeight: "1.5",
                }}
              >
                {category.description}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    padding: "40px 30px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
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
                        "linear-gradient(135deg, rgba(132, 94, 194, 0.1), rgba(78, 158, 255, 0.1))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "4rem",
                      marginBottom: "24px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      marginBottom: "16px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.6",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Report Concern CTA */}
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
                "radial-gradient(circle at center, rgba(255, 107, 157, 0.1) 0%, transparent 70%)",
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
            Report a Security Concern
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
            If you notice anything suspicious or have security concerns, please
            contact us immediately.
          </p>
          <a
            href="mailto:security@grapebanking.com"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "linear-gradient(135deg, #ff6b9d, #845ec2)",
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
            security@grapebanking.com
          </a>
        </div>
      </div>
    </div>
  );
};
