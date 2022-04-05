import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import img_1 from "../images/bg-hero-1.jpg";
import img_2 from "../images/bg-hero-2.jpg";
import img_3 from "../images/bg-hero-3.jpg";
import img_4 from "../images/bg-hero-4.jpg";

const Header = () => {
  const imageArr = [img_1, img_2, img_3, img_4];
  const [sliderImage, setsliderImage] = useState(0);

  const handleNextSlide = () => {
    if (sliderImage === imageArr.length - 1) {
      setsliderImage(0);
    } else {
      setsliderImage(sliderImage + 1);
    }
  };
  const handlePrevSlide = () => {
    if (sliderImage === 0) {
      setsliderImage(imageArr.length - 1);
    } else {
      setsliderImage(sliderImage - 1);
    }
  };
  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.575)), url(${imageArr[sliderImage]})`,
      }}
    >
      <div className="custom-container">
        <div className="header__content">
          <h1 className="heading mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            voluptatum asperiores maxime et odio, sit ex sapiente quasi maiores
            repellendus quod, odit fuga dolor, dolorum distinctio excepturi
            molestias in.
          </p>

          <div className="header__btns">
            <button className="btn-primary">
              <Link to="/products">start shopping</Link>
            </button>
            <button className="btn-primary">
              <Link to="/contact">contact us</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="slider-btns">
        <button className="slider-btn prev" onClick={handlePrevSlide}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button className="slider-btn next" onClick={handleNextSlide}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Header;
