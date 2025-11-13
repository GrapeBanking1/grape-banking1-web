import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

interface NavigationProps {
  isMobileMenuOpen: boolean;
  onLinkClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMobileMenuOpen,
  onLinkClick,
}) => {
  return (
    <nav
      className={`nav-container ${
        isMobileMenuOpen ? "nav-container--open" : ""
      }`}
    >
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/features" className="nav-link">
        Features
      </Link>
      <Link to="/security" className="nav-link">
        Security
      </Link>
      <Link to="/help" className="nav-link">
        Help
      </Link>
      <Link to="/download" className="nav-link">
        Download
      </Link>
      <div className="menu-icon-link">
        <div className="parallel-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>
    </nav>
  );
};
