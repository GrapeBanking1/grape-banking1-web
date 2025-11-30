import React from "react";
import { useNavigate } from "react-router-dom";
import "./CTAButton.css";

export const CTAButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/early-access");
  };

  return (
    <div className="button-container">
      <button className="signup-button" onClick={handleClick}>
        <span className="button-text">Sign up Early Access</span>
        <span className="button-arrow">→</span>
      </button>
    </div>
  );
};
