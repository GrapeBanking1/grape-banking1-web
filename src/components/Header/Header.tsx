import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import "./Header.css";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Auto-close mobile menu on scroll and prevent body scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isMobileMenuOpen) {
        e.preventDefault();
      }
    };

    if (isMobileMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // Add scroll and touch listeners
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });

      // Listen for any scroll attempts on the document
      const scrollElements = document.querySelectorAll("*");
      scrollElements.forEach((el) => {
        el.addEventListener("scroll", handleScroll, { passive: true });
      });
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      // Cleanup all event listeners
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchmove", handleTouchMove);

      // Restore body styles
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      // Remove scroll listeners from all elements
      const scrollElements = document.querySelectorAll("*");
      scrollElements.forEach((el) => {
        el.removeEventListener("scroll", handleScroll);
      });
    };
  }, [isMobileMenuOpen]);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const header = document.querySelector(".header-container");
      const nav = document.querySelector(".nav-container");

      if (isMobileMenuOpen && header && nav) {
        if (!header.contains(target) && !nav.contains(target)) {
          closeMobileMenu();
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header-container">
      <Logo />
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onLinkClick={closeMobileMenu}
      />
      <MenuToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
        />
      )}
    </header>
  );
};
