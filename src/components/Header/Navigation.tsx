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
      <Link to="/about" className="nav-link" onClick={onLinkClick}>
        About
      </Link>
      <Link to="/features" className="nav-link" onClick={onLinkClick}>
        Features
      </Link>
      <Link to="/security" className="nav-link" onClick={onLinkClick}>
        Security
      </Link>
      <Link to="/help" className="nav-link" onClick={onLinkClick}>
        Help
      </Link>
      <Link to="/download" className="nav-link" onClick={onLinkClick}>
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
