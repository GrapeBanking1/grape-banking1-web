import React from "react";

export const Security: React.FC = () => {
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
          Security First
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "60px",
          }}
        >
          Your security is our top priority. Learn about our comprehensive
          security measures.
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
            Bank-Grade Security
          </h2>
          <p>
            We use the same security standards as major banks to protect your
            financial data.
          </p>
        </div>
      </div>
    </div>
  );
};
