import React, { useRef } from "react";
import "./CreditCard.css";
import cardBarImage from "../../assets/Group 158.png";
import sphereVideo from "../../assets/Sphere-video.mp4";
import gIcon from "../../assets/G-icon.png";
import grapeIcon from "../../assets/Grape-Image.png";

export const CreditCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInteraction = (clientX: number, clientY: number) => {
    if (!cardRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const card = cardRef.current;
    const rect = container.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate distance from center (0 to 1)
    const distanceFromCenterX = (x - centerX) / centerX; // -1 to 1
    const distanceFromCenterY = (y - centerY) / centerY; // -1 to 1

    // Adjust sensitivity based on screen size
    const isMobile = window.innerWidth <= 768;

    // Enhanced movement parameters
    const translationSensitivity = isMobile ? 15 : 20; // Translation movement
    const maxRotation = 25; // Maximum rotation in degrees

    // Calculate rotations for uniform corner behavior
    // Invert rotateX: cursor up should make card tilt up, cursor down should make card tilt down
    const rotateX = Math.max(
      -maxRotation,
      Math.min(maxRotation, -distanceFromCenterY * maxRotation)
    );
    // Y-axis rotation: cursor left = card tilts left (negative), cursor right = card tilts right (positive)
    const rotateY = Math.max(
      -maxRotation,
      Math.min(maxRotation, -distanceFromCenterX * maxRotation)
    );

    // Calculate translations - direct mapping for natural movement
    const translateX = distanceFromCenterX * translationSensitivity;
    const translateY = distanceFromCenterY * translationSensitivity;

    // Apply enhanced 3D transformation
    card.style.transform = `
      translate3d(${translateX}px, ${translateY}px, 0px) 
      scale3d(1, 1, 1) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      rotateZ(-9deg) 
      skew(0deg, 0deg)
    `;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleInteraction(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleInteraction(touch.clientX, touch.clientY);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) skew(0deg, 0deg)";
      cardRef.current.style.transition = "transform 0.3s ease-out";

      // Remove transition after animation completes
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = "";
        }
      }, 300);
    }
  };

  return (
    <div className="card-container">
      <div
        className="hero__card-contain"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseLeave}
      >
        <div className="hero__video">
          <video autoPlay loop muted playsInline>
            <source src={sphereVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero__card" ref={cardRef}>
          <div className="hero__card-content">
            <div className="hero__card-top">
              <div className="hero__card-logo">
                <img
                  src={grapeIcon}
                  alt="Grape Banking Logo"
                  className="logo-image"
                />
              </div>
              <div className="hero__card-icon">
                <img
                  src={gIcon}
                  alt="Grape G Icon"
                  className="hero__card-icon-img"
                />
              </div>
            </div>
            <div className="hero__card-bottom">
              <p className="hero__card-text">4323 7645 2828 0713</p>
              <div className="hero__card-bar"></div>
            </div>
            <img
              src={cardBarImage}
              loading="lazy"
              alt="Card Bar"
              className="hero__card-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
