import React from "react";

export const Terms: React.FC = () => {
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
          Terms of Service
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
            1. Acceptance of Terms
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            By accessing and using Grape's services, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            2. Use of Services
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Grape provides digital banking services subject to the terms
            outlined in this agreement.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            3. Privacy and Security
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Your privacy and security are of utmost importance to us. Please
            refer to our Privacy Policy for detailed information.
          </p>
        </div>
      </div>
    </div>
  );
};
