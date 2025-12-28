import React, { useState } from "react";
import { InlineForm } from "../components/Forms/InlineForm";
import "./Download.css";

export const Download: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // For now, apps are not live, so we show "Coming Soon"
  const appsLive = false;

  const QRCode = () => (
    <div className="qr-code" onClick={openModal} style={{ cursor: "pointer" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ fontSize: "2rem" }}>📱</div>
        <div
          style={{
            fontSize: "0.8rem",
            textAlign: "center",
            lineHeight: "1.2",
            fontWeight: "600",
          }}
        >
          QR CODE
          <br />
          SCAN ME
        </div>
      </div>
    </div>
  );

  const StoreBadge = ({
    store,
    comingSoon = false,
  }: {
    store: string;
    comingSoon?: boolean;
  }) => (
    <div
      className={`store-badge ${
        comingSoon ? "store-badge--coming-soon" : "store-badge--live"
      }`}
      onClick={comingSoon ? openModal : undefined}
    >
      <div className="store-badge-icon">{store === "ios" ? "📱" : "🤖"}</div>
      <div className="store-badge-text">
        <div className="store-badge-subtitle">
          {comingSoon ? "Coming Soon to" : "Download on the"}
        </div>
        <div className="store-badge-title">
          {store === "ios" ? "App Store" : "Google Play"}
        </div>
      </div>
    </div>
  );

  return (
    <div className="download-page">
      <div className="download-container">
        {/* Hero Section */}
        <div className="download-hero">
          <h1>Download Grape</h1>
          <p>
            {appsLive
              ? "Get the Grape app on your device and start banking smarter today."
              : "The future of banking is coming soon. Join our waitlist to be first in line."}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="download-grid">
          {/* Left Side - Store Badges */}
          <div className="store-badges-section">
            <h2>{appsLive ? "Available Now" : "Coming Soon"}</h2>

            <div className="store-badges">
              <StoreBadge store="ios" comingSoon={!appsLive} />
              <StoreBadge store="android" comingSoon={!appsLive} />
            </div>

            {!appsLive && (
              <div className="notify-section">
                <h3>Get Notified at Launch</h3>
                <p>
                  Join our early access waitlist to receive updates, early
                  feature access, and a notification the moment Grape becomes
                  available.
                </p>
              </div>
            )}
          </div>

          {/* Right Side - QR Code */}
          <div className="qr-section">
            <h3>{appsLive ? "Quick Download" : "Join Waitlist"}</h3>

            <QRCode />

            <p className="qr-description">
              {appsLive
                ? "Scan with your phone's camera to download the app directly"
                : "Scan to quickly join our waitlist from your mobile device"}
            </p>

            <button
              onClick={() => setShowQR(!showQR)}
              className="qr-details-button"
            >
              {showQR ? "Hide Details" : "Show QR Details"}
            </button>

            {showQR && (
              <div className="qr-details">
                <strong>QR Code Target:</strong>
                <br />
                {appsLive
                  ? "Direct app download links for iOS/Android"
                  : "https://grapebanking.com/early-access"}
                <br />
                <br />
                <em>
                  Click the QR code above to{" "}
                  {appsLive ? "see download options" : "join waitlist"}
                </em>
              </div>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="features-preview">
          <h2>What You'll Get</h2>

          <div className="features-grid">
            {[
              {
                icon: "🤖",
                title: "Scribe AI™",
                desc: "An intelligent financial assistant designed to explain spending, surface insights, and guide better decisions.",
              },
              {
                icon: "⚡",
                title: "Instant Payments",
                desc: "Fast, reliable transfers with real-time updates and visibility.",
              },
              {
                icon: "🛡️",
                title: "Bank-Grade Security",
                desc: "Modern encryption, secure authentication, and continuous monitoring to help protect your account.",
              },
              {
                icon: "📊",
                title: "Smart Insights",
                desc: "Clear, easy-to-understand views of your financial activity—without complexity.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>

          <button onClick={openModal} className="download-cta">
            {appsLive ? "Download Now" : "Join Early Access"}
          </button>
        </div>

        {/* Modal for InlineForm */}
        {isModalOpen && (
          <div className="download-modal-overlay" onClick={closeModal}>
            <div
              className="download-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="download-modal-close" onClick={closeModal}>
                ×
              </button>
              <InlineForm
                isModal={true}
                useEnhanced={true}
                onClose={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
