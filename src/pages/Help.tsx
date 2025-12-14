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
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions (FAQ)
          </h2>

          <div
            style={{
              display: "grid",
              gap: "30px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                What is Grape?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape is an AI-powered mobile wallet and financial intelligence
                platform designed to help people understand, manage, and move
                money with clarity. Unlike traditional banking apps, Grape
                explains your money in real time using Scribe AI — not just
                shows numbers.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Who is Grape for?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape is built for Gen Z & Gen Alpha learning money for the
                first time, young working adults managing income, bills, and
                savings, families and parents teaching financial literacy, and
                older adults seeking clearer insights and reduced financial
                risk.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                What makes Grape different from banks or other finance apps?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape explains why money moves, provides proactive insights,
                teaches financial literacy automatically, and combines wallet
                functionality with AI intelligence in one place.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                What is Scribe AI?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Scribe AI™ analyzes spending behavior, explains financial
                activity in plain language, flags risks before they become
                problems, and helps users learn how money works. It does not
                replace licensed financial professionals.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Is Grape a bank?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                No. Grape is a financial technology company that works with
                regulated banking and payment partners.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Is my money safe with Grape?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Yes. Grape uses bank-grade encryption, tokenization, fraud
                detection, biometric security, and KYC/AML compliance to protect
                users and funds.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Does Grape sell my personal data?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                No. Grape does not sell personal data. Information is used only
                to operate the platform, generate insights, and meet regulatory
                obligations.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                How does Grape make money?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape generates revenue through transaction-related services,
                AI-powered financial tools, and value-added services—never
                through hidden fees.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Can I control my data and privacy?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Yes. Users can export data, request deletion, manage privacy
                settings, and review transparency reports.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Is Grape available internationally?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape is built with global scalability in mind. Initial
                availability begins in the U.S., with international expansion
                planned as approvals are secured.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Is Grape available yet?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Grape is currently in early development and pre-launch. Users
                may join the early access waitlist to receive updates.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Does Scribe AI provide investment advice?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                No. Scribe AI provides educational insights and explanations,
                not licensed investment advice.
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                How do I contact Grape support?
              </h3>
              <div
                style={{ lineHeight: "1.8", color: "rgba(255, 255, 255, 0.8)" }}
              >
                <p style={{ margin: "5px 0" }}>
                  <strong>Legal:</strong>{" "}
                  <a
                    href="mailto:legal@grapebanking.com"
                    style={{ color: "#ff6b9d", textDecoration: "none" }}
                  >
                    legal@grapebanking.com
                  </a>
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Privacy:</strong>{" "}
                  <a
                    href="mailto:privacy@grapebanking.com"
                    style={{ color: "#ff6b9d", textDecoration: "none" }}
                  >
                    privacy@grapebanking.com
                  </a>
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>General Contact:</strong>{" "}
                  <a
                    href="mailto:contact@grapebanking.com"
                    style={{ color: "#ff6b9d", textDecoration: "none" }}
                  >
                    contact@grapebanking.com
                  </a>
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  color: "#4e9eff",
                  marginBottom: "10px",
                }}
              >
                Where is Grape based?
              </h3>
              <p
                style={{ lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)" }}
              >
                Tampa, Florida, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
