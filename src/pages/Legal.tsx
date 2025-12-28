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
            marginBottom: "16px",
            background: "linear-gradient(135deg, #ff6b9d, #845ec2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Legal Information
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            marginBottom: "40px",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 40px auto",
          }}
        >
          Grape, Inc. ("Grape," "we," "our," or "us") operates as a financial
          technology company and does not itself provide banking services unless
          explicitly stated. Banking, payment, and financial services made
          available through the Grape platform are provided by regulated
          third-party financial institutions and licensed partners, where
          applicable.
        </p>

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
            Grape is committed to compliance with all applicable United States
            federal laws and regulations, as well as the laws and regulations of
            the State of Florida, including but not limited to anti-money
            laundering (AML), know-your-customer (KYC), consumer protection,
            data privacy, and financial crime prevention requirements. Grape
            maintains policies and procedures designed to support compliance
            obligations applicable to its role as a technology and services
            provider.
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
            Grape does not hold itself out as a bank or depository institution.
            Any banking or regulated financial services accessible through the
            platform are offered by third-party financial institutions that are
            appropriately licensed, chartered, or authorized by relevant federal
            and state regulatory authorities. Grape’s role is limited to
            providing technology, user interface, and related support services
            unless otherwise expressly stated.
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
            Any dispute, claim, or controversy arising out of or relating to
            these Terms or the use of the Grape platform shall be resolved
            through final and binding arbitration, administered in accordance
            with applicable arbitration rules. Arbitration shall take place in
            the State of Florida, unless otherwise required by law. By using the
            services, you waive the right to participate in class actions or
            jury trials to the fullest extent permitted by law.
          </p>
        </div>
      </div>
    </div>
  );
};
