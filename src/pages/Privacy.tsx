import React from "react";

export const Privacy: React.FC = () => {
  return (
    <div
      style={{
        padding: "120px 20px 80px",
        background: "#0f0f23",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #ff6b9d, #845ec2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Privacy Policy
        </h1>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "40px",
            borderRadius: "20px",
            lineHeight: "1.6",
          }}
        >
          <p style={{ marginBottom: "20px" }}>Last updated: January 2024</p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            1. Information We Collect
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            We collect information you provide directly to us, such as when you
            create an account, use our services, or contact us.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            2. How We Use Your Information
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            We use the information we collect to provide, maintain, and improve
            our services and communicate with you.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            3. Data Security
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            We implement appropriate technical and organizational security
            measures to protect your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};
