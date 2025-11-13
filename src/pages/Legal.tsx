import React from "react";

export const Legal: React.FC = () => {
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
          Legal Information
        </h1>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "40px",
            borderRadius: "20px",
            lineHeight: "1.6",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Regulatory Compliance
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Grape operates in compliance with all applicable financial
            regulations and banking laws.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Licensing
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Our banking services are provided under appropriate licensing from
            relevant financial authorities.
          </p>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Dispute Resolution
          </h2>
          <p
            style={{ marginBottom: "20px", color: "rgba(255, 255, 255, 0.8)" }}
          >
            Any disputes arising from the use of our services will be resolved
            through binding arbitration.
          </p>
        </div>
      </div>
    </div>
  );
};
