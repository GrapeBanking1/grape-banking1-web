import React from "react";
import { WaitlistForm } from "../components/Forms/WaitlistForm";

export const EarlyAccess: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)",
        paddingTop: "120px",
      }}
    >
      <WaitlistForm />
    </div>
  );
};
