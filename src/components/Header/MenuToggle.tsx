import React from "react";
import "./MenuToggle.css";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`menu-button ${isOpen ? "menu-button--open" : ""}`}
      onClick={onClick}
    >
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </button>
  );
};
