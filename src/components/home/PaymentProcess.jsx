import React from "react";
import {
  star,
  choose_recipient,
  fasst_tagocash_logo,
  tagocash_different,
  tagocash_different_mini,
  pointer_star,
} from "../../assets";

const PaymentProcess = () => {
  return (
    <div className="payment_process_section position-relative">
      <div className="position-absolute top-0 end-0">
        <img src={star} alt="star" width={"258px"} height={"266px"} />
      </div>
      <div className="container">
        <div>
          <h3 className="sub_title padding_top">
            Paying someone, made easier!
          </h3>
          <p className="sub_text">
          With TagoCash, paying someone is as easy as paying with cash. <br />
          Complete your payment in 3 simple steps:
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="ps-5 mt-5">
            <div className="d-flex">
              <div className="number_block active mt-4">
                <p>1</p>
              </div>

              <div className="payment_process_card">
                <h3 className="hero_subtitle">Choose Recipient</h3>
                <p className="sub_text payment_process_card_text">
                  Find your partner on tagocash app via his phone or email.
                </p>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="number_block mt-4">
                <p>2</p>
              </div>

              <h3 className="hero_subtitle ms-5 mt-4">Enter Amount </h3>
            </div>

            <div className="d-flex mt-4">
              <div className="number_block mt-4">
                <p>3</p>
              </div>

              <h3 className="hero_subtitle ms-5 mt-4">Confirm & pay</h3>
            </div>
          </div>

          <div>
            <img
              src={choose_recipient}
              width={"475px"}
              height={"500px"}
              alt=""
            />
          </div>
        </div>

        <div className="tagocash_better_section mt-5">
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <img
              src={fasst_tagocash_logo}
              width={"254px"}
              height={"50px"}
              alt=""
            />
            <h3 className="sub_title">is the same as Cash, but better!</h3>
          </div>

          <div className="margin_top">
            <div className="tagocash_features_block">
              <div className="position-relative">
                <img
                  src={tagocash_different}
                  width={"249px"}
                  height={"512px"}
                  alt=""
                />
              </div>

              <div className="mini_image_position">
                <img
                  src={tagocash_different_mini}
                  width={"248px"}
                  height={"302px"}
                  alt=""
                />
              </div>

              <div className="mt-5 ms-4">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle tagocash_features_title">
                      {" "}
                      TagoCash is Globally Available
                    </h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                    TagoCash is the cash of where you happen to be
                  </p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle tagocash_features_title">
                    TagoCash is Very Safe
                    </h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                  TagoCash can not be stolen.
                  </p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle tagocash_features_title">
                      TagoCash is Private
                    </h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                  Using TagoCash protects your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
