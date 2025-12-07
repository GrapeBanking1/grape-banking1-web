import React from "react";
import { Link } from "react-router-dom";
import grapeIcon from "../../assets/Grape-Image.png";
import "./Logo.css";

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo-container">
      <img src={grapeIcon} alt="Grape Banking Logo" className="logo-image" />
    </Link>
  );
};
