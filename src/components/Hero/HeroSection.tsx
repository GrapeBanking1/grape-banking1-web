import React from "react";
import { CreditCard } from "./CreditCard";
import { CTAButton } from "./CTAButton";
import "./HeroSection.css";
import starIcon from "../../assets/star 1.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="content-section">
        <div className="title-container">
          <h1 className="main-heading">
            <img src={starIcon} alt="Star Icon" className="grape-icon" />
            A FRESH
            <br />
            TAKE ON
            <br />
            FINANCE
          </h1>
        </div>
        <p className="sub-heading">
          AI-enhanced banking for better security, smarter decisions, and
          seamless transactions. Launching soon on iOS + Android.
        </p>
        <CTAButton />
      </div>
      <div className="card-section">
        <CreditCard />
      </div>
    </section>
  );
};
