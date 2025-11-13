import React, { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import "./Header.css";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <Logo />
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={() => setIsMobileMenuOpen(false)}
      />
      <MenuToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </header>
  );
};
