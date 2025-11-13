import React from "react";
import { HeroSection } from "../components/Hero/HeroSection";
import { ValueProps } from "../components/ValueProps/ValueProps";
import { HowItWorks } from "../components/HowItWorks/HowItWorks";
import { SocialProof } from "../components/SocialProof/SocialProof";
import { InlineForm } from "../components/Forms/InlineForm";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <ValueProps />
      <HowItWorks />
      <SocialProof />
      <InlineForm />
    </div>
  );
};
