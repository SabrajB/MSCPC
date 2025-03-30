import React from "react";
import "./Hero.css";
import mainFocal from "../assets/mainfocal2.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={mainFocal} alt="Main Focal" className="hero-image" />
      <div className="hero-overlay">
        <h2 className="hero-text">
          Looking for expert accounting services? 
          </h2>
        <h3>          At MSPSC, we provide professional, reliable, and tailored financial solutions to help your business thrive.
        </h3>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
