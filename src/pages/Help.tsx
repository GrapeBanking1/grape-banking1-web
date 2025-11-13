import React from "react";

export const Help: React.FC = () => {
  return (
    <div
      style={{
        padding: "120px 20px 80px",
        background: "#0f0f23",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #ff6b9d, #845ec2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Help Center
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "60px",
          }}
        >
          Find answers to frequently asked questions and get support.
        </p>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "40px",
            borderRadius: "20px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            Frequently Asked Questions
          </h2>
          <p>
            Get instant answers to common questions about Grape banking features
            and services.
          </p>
        </div>
      </div>
    </div>
  );
};
