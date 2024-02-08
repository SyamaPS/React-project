import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
       
        <h1 className="primary-heading">
        Style in every step. Trendy shoes make ordinary moments extraordinary
        </h1>
        <p className="primary-text">
        At Trendy, we're passionate about redefining the shoe shopping experience. Our mission is simple: to offer footwear that blends unparalleled comfort with cutting-edge style. Each pair in our collection is carefully crafted to meet the demands of modern life, ensuring you not only look great but feel great too.
        </p>
        <p className="primary-text">
        From classic designs to contemporary must-haves, our diverse range caters to every taste and occasion. Whether you're heading to the office or out for a night on the town, Trendy has the perfect shoe to complement your style. Step into confidence and elevate your look with Trendy—where comfort meets couture, and every step tells a story of style.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
