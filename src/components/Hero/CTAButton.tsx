import React from "react";
import "./CTAButton.css";

export const CTAButton: React.FC = () => {
  return (
    <div className="button-container">
      <button className="signup-button">
        <span className="button-text">Sign up Early Access</span>
        <span className="button-arrow">→</span>
      </button>
    </div>
  );
};
