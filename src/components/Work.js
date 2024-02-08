import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Unlimited Collections",
      text: "At Trendy, our unmatched selection of shoes offers endless possibilities to elevate your style. From classic staples to on-trend favorites, we have something to suit every taste and occasion.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Select Your Frequency: Tailor your shoe shopping experience to your preferences, ensuring you receive the perfect pairs exactly when you need them. With Choose How Often, finding the ideal footwear has never been more convenient ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience lightning-fast delivery with our express shipping option, ensuring your favorite shoes reach your doorstep in record time. At our shoe site, we prioritize speed and efficiency to bring you the fastest delivery service possible.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Shopping at Trendy is effortless and enjoyable. Simply browse our curated collection of shoes online, where you'll find detailed descriptions and high-quality images of each pair. Once you've found the perfect shoes, select your size and add them to your cart with just a few clicks. Our secure checkout process ensures your payment details are safe, and you can choose from a range of convenient payment options. Once your order is placed, sit back and relax as we swiftly prepare your shoes for shipping. With fast delivery and hassle-free returns, getting your hands (or feet!) on your new favorite pair of shoes has never been easier.





        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
