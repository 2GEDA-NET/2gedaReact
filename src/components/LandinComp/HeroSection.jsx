import React from "react";
import "./style.css";
import ActionButton from "../Commons/Button";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="img-box">
        <div className="image-container">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container">
          <img src="images/hero4.jpg" alt="" />
        </div>
      </div>
      <div className="text-overlay">
        <div className="hero-hedline">
          Explore and Connect to Diverse Opportunities on 2geda
        </div>
        <div className="hero-simple">
          2geda opens doors to diverse opportunities, from commerce and business
          directories to people, ticket sales, livestreaming, stereo, TV,
          voting, and education.
        </div>
        <div className="hero-btns-box">
          <ActionButton bg={"white"} label={"Get started"} />
          <ActionButton bg={"trans"} label={"Download app"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
