import React from "react";
import {
  fasst_tagocash_logo,
  currency_exchange,
  bank_cards,
  money_gram,
  coinstar,
} from "../../assets";

const MoreWithTagoCash = () => {
  return (
    <div className="container margin_top">
      <div class="grid-container my-5">
        <div className="row">
          <div class="col-5">
            <h2 className="hero_title get_more_title">Get more with </h2>
            <img
              src={fasst_tagocash_logo}
              width={"288px"}
              height={"57px"}
              alt=""
            />
          </div>
          <div class="col-7 rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex align-items-center justify-content-center get_more_feature_padding">
              <div>
                <img src={coinstar} width={"89px"} height={"81px"} alt="" className="me-4" />
              </div>
              <div>
                <p className="fasst_feature_description get_more_subtext coinstar_text">Withdraw local cash from 40,000+ coinstar ATM.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="item1 rounded-3 get_more_feature_padding get_feature_box">
          <div className="d-flex flex-column align-items-center get_more_feature_padding">
            <div>
              <img
                src={currency_exchange}
                width={"94px"}
                height={"94px"}
                alt=""
                className="mb-3"
              />
            </div>
            <div>
              <p className="fasst_feature_description get_more_subtext linked_bank_text">Instant transfer to and from linked bank accounts.</p>
            </div>
          </div>
        </div>

        <div className="row gap-4 mt-3">
          <div class="col rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex align-items-center">
              <div>
                <img src={bank_cards} width={"81px"} height={"81px"} alt="" className="mx-4" />
              </div>
              <div>
                <p className="fasst_feature_description get_more_subtext cards_text py-2">Instant Transfer to and from any mobile money account</p>
              </div>
            </div>
          </div>
          <div class="col rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <p className="fasst_feature_description get_more_subtext money_gram_text">
                  Withdraw or deposit local currency cash from 21,000+ MoneyGram
                  store
                </p>
              </div>
              <div>
                <img src={money_gram} width={"79px"} height={"79px"} alt="" className="ms-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWithTagoCash;
