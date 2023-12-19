import React from "react";
import {app_store, play_store, hero, currencyanimation_image } from "../../assets";

const HeroSection = () => {
  return (
      <div className="container">
        <div className="d-flex gap-5 margin_top">
          <div className="mt-5">
            <h1 className="hero_title">
              Everywhere you go,
              <br />
              <span className="hero_title_tago">Tago!</span>
            </h1>
            <h3 className="hero_subtitle mt-3">
              Take it with you where ever you go, <br />
              <span className="sub_text">
                TagoCash, is your cash stored in digital form
              </span>
            </h3>
            <div className="d-flex gap-3 mt-5">
              <a href="">
                <img src={play_store} width={"132px"} height={"42px"} alt="play store" />
              </a>
              <a href="">
              <img src={app_store} width={"132px"} height={"42px"} alt="app store" />
              </a>
            </div>
          </div>

          <div>
            <img src={hero} alt="hero image" width={"671px"} height={"487px"} />
          </div>
        </div>

        <div className="d-flex margin_top mb-5 gap-3">
          <h3 className="sub_title">Available Globally in 
          40+ currencies</h3>
          <div className="currency_animation_block">
            <img src={currencyanimation_image} alt="currencies" width={"849px"} height={"64px"} />
          </div>
        </div>
      </div>
   
  );
};

export default HeroSection;
