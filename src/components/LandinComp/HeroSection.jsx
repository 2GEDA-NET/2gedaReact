import React from "react";
import "./style.css";
import ActionButton from "../Commons/Button";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/signup");
  };
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda";
  const iosLink = "https://apps.apple.com/ng/app/2geda/id6449421569";

  const getOSLink = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is on an Android device
    if (/android/i.test(userAgent)) {
      window.location.href = androidLink;
    } else {
      // User is on iOS or any other platform
      window.location.href = iosLink;
    }
  };

  return (
    <div className="hero-container" id="hero-section">
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
          <ActionButton
            bg={"white"}
            label={"Get started"}
            onclick={goToCreate}
          />

          <ActionButton
            bg={"trans"}
            label={"Download app"}
            onclick={getOSLink}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
