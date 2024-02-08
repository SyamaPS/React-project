import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Trendy shoes exceeded my expectations with their impeccable craftsmanship and stylish designs. I'm thrilled with my purchase and can't wait to shop with them again!





        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I am extremely satisfied with my Trendy shoes; they are both comfortable and stylish, perfect for any occasion. The quality is outstanding, and I couldn't be happier with my purchase.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>SYAMA P S</h2>
      </div>
    </div>
  );
};

export default Testimonial;
