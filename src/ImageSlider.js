import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HomePage from "./HomePage";
import Services from "./Services";
import { IoMdArrowDropright } from "react-icons/io";

const ImageSlider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <OwlCarousel
          items={1}
          className="owl-theme"
          autoplay="true"
          loop="true"
          nav
          margin={8}
          smartSpeed="1000"
        >
          <div>
            <img src="././images/Slider2.jpg" alt="" />
            <div className="expert ">
              <img src="././images/expert.png" alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>RECRUIT IS ALL ABOUT THE PEOPLE</h4>
              <h3>
                Talent <span className="sliderSpan"> acqusition</span> Solution
                Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
          <div>
            <img src="././images/Slider3.jpg" alt="" />
            <div className="expert ">
              <img src="././images/expert.png" alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>RECRUIT IS ALL ABOUT THE PEOPLE</h4>
              <h3>
                Talent <span className="sliderSpan"> acqusition</span> Solution
                Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
          <div>
            <img src="././images/Slider1.jpg" alt="" />
            <div className="expert ">
              <img src="././images/expert.png" alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>RECRUIT IS ALL ABOUT THE PEOPLE</h4>
              <h3>
                Talent <span className="sliderSpan"> acqusition</span> Solution
                Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <HomePage />
      <Services />
    </div>
  );
};

export default ImageSlider;
