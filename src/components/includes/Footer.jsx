import React from "react";
import { tagocash_logo, linkedin, instagram, twitter, play_store, app_store} from "../../assets";

const Footer = () => {
  return (
    <div className="container mt-5">
        <div className="d-flex gap">
            <div className="mt-5">
                <img src={tagocash_logo} width={"218px"} height={"43px"} alt="" />
                <h3 className="hero_subtitle footer_title mt-2">Everywhere you go, Tago!</h3>
                <p className="footer_subtext footer_subtext_width">
                TagoCash is the fulfillment of our dream to live, work, travel and
                seamlessly spend our money anywhere in the world. This implies being
                able to move money instantly, transparently, conveniently, for free.
                </p>
                <div className="d-flex gap-4 mt-5">
                    <a href="">
                        <img src={linkedin} alt="linkedin" width={"24px"} height={"24px"} />
                    </a>

                    <a href="">
                        <img src={instagram} alt="instagram" width={"24px"} height={"24px"} />
                    </a>

                    <a href="">
                        <img src={twitter} alt="twitter" width={"24px"} height={"24px"} />
                    </a>
                </div>
            </div>

            <div className="footer_links_block">
                <div className="margin_top">
                    <h3 className="fasst_feature_description">Company</h3>
                    <div className="d-flex flex-column">
                        <a href="" className="footer_page_link footer_subtext mt-2">Home</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">About Us</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">Blog</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">What makes TagoCash Different</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">Get more with TagoCash</a>
                    </div>

                </div>
                
                <div className="margin_top">
                    <h3 className="fasst_feature_description">Legal</h3>
                    <div className="d-flex flex-column">
                        <a href="" className="footer_page_link footer_subtext mt-2">Contact Us</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">Terms and Conditions</a>
                        <a href="" className="footer_page_link footer_subtext mt-2">Privacy Policy</a>
                       
                    </div>

                </div>

                <div className="d-flex flex-column gap-3 margin_top">
                    <a href="">
                    <img src={app_store} width={"183px"} height={"58px"} alt="app store" />
                    </a>
                    
                    <a href="">
                        <img src={play_store} width={"183px"} height={"58px"} alt="app store" />
                    </a>
                </div>
                
            </div>
        </div>

        <div className="mt-5">
            <p className="text-center footer_subtext trademark">TagoCash is ©2023 Trademark Registered by TagoBits, Inc.</p>
        </div>
    </div>
  );
};

export default Footer;
