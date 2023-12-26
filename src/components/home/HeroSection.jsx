import React from "react";
import {app_store, google_play, hero, currencyanimation_image } from "../../assets";

const HeroSection = () => {
  return (
      <div className="container">
        <div className="d-flex gap-5 margin_top">
          <div className="mt-5">
            <h1 className="hero_title">
              Everywhere you go,<span className="hero_title_tago">Tago!</span>
            </h1>
            <h3 className="hero_subtitle mt-3">
            TagoCash, is your cash in digital Wallet.<br />
              <span className="sub_text">
              Take it with you wherever you go.
              </span>
            </h3>
            <div className="d-flex gap-3 mt-5">
            <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">App Store</p>
                        <img src={app_store} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
                    
                    <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">Google Play</p>
                        <img src={google_play} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
            </div>
          </div>

          <div>
            <img src={hero} alt="hero image" width={"535px"} height={"450px"} />
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
