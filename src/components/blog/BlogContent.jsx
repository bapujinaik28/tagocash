import React from "react";
import {
  blog_1,
  blog_2,
  blog_3,
  blog_content_right,
  google_play,
  apple_store,
  app_store,
  linkedin,
  instagram,
  twitter,
  facebook,
  formkit_link,
} from "../../assets";
import NewsLetterSection from "../home/NewsLetterSection";

const BlogContent = () => {
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": "'>",
  };
  return (
    <div className="blog_section margin_top mb-5">
      <div className="container mb-5">
        <nav style={breadcrumbStyle} aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a className="text-decoration-none text-black" href="#">
                Home
              </a>
            </li>
            <li class="breadcrumb-item">
              <a className="text-decoration-none text-black" href="#">
                Blogs
              </a>
            </li>
            <li class="breadcrumb-item text-black active" aria-current="page">
              Payment
            </li>
          </ol>
        </nav>
        <div className="blog_content_block gap-5 d-flex">
          <div className="left_blog_content">
            <div>
              <h3 className="sub_title blog_content_title">
                Simplifying payment methods code in our new API version
              </h3>
              <p className="sub_text blogs_content_subtext">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex gap-3">
                  <p className="blog_type_text blogs_page_subtext">Product</p>
                  <span className="filled_circle_blog bg-primary"></span>
                  <p className="blog_type_text blogs_page_subtext">
                    Engineering
                  </p>
                </div>

                <div className="d-flex gap-3">
                  <p className="blog_type_text blogs_page_subtext text-black">
                    20th Oct 2023
                  </p>
                  <span className="filled_circle_blog"></span>

                  <p className="blog_type_text blogs_page_subtext text-black">
                    7 Min Read
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-4">
                <img src={blog_1} width={"800px"} height={"480px"} alt="" />
              </div>
              <div>
                <p className="download_app_subtext text-black">
                  Apart from equity capital, companies also use debt to fund
                  their operations and expansion. One mode of raising debt is
                  corporate bonds. These can be for both long-term and
                  short-term requirements. These bonds are issued to financial
                  institutions, mutual funds, foreign investors, and also retail
                  investors.
                </p>
                <p className="download_app_subtext text-black question_blog">What are corporate bonds?</p>
                <p className="download_app_subtext text-black">
                  Corporate bonds are debt securities issued by companies to
                  fund their business operations. Investors who invest in
                  corporate bonds essentially lend money to these companies. In
                  return, they receive a specified interest at regular
                  intervals, and the principal at the end of the term. Bond
                  investors are essentially lenders to a company just like a
                  bank or an NBFC that gives a loan to a company.
                </p>
                <p className="download_app_subtext text-black question_blog">What are the different types of corporate bonds?</p>
                <p className="download_app_subtext text-black">
                  Based on parameters like type of collateral, credit rating,
                  and interest rate, corporate bonds are split into multiple
                  categories:
                </p>
                <p className="download_app_subtext text-black">1. Investment-grade and junk-rated bonds</p>
                <p className="download_app_subtext text-black">
                  Bonds issued by companies with a credit rating above Baa or
                  BBB are usually referred to as investment-grade bonds.A high
                  credit rating indicates lower chances of payment defaults.
                  These bonds have lower risk as compared to junk-rated bonds,
                  and hence have a comparatively lower coupon or interest rate.
                  Those bonds issued by companies with a credit rating below Baa
                  or BBB are usually referred to as junk-rated bonds. Junk-rated
                  bonds are usually considered to have a very low credit rating,
                  hence the interest payable on these bonds are higher. These
                  bonds are high-risk, high-return financial instruments.
                </p>
                <p className="download_app_subtext text-black">2. Convertible and non-convertible bonds</p>
                <p>
                  Convertible bonds are a hybrid security that can be converted
                  into shares of the company at a predetermined price. These
                  bonds can be either optionally convertible or compulsorily
                  convertible into shares of the company. On the other hand,
                  non-convertible bonds are plain bonds issued by a company for
                  a fixed maturity period and interest rate. You can't convert
                  these bonds into equity shares.
                </p>
                <p className="download_app_subtext text-black">3. Floating and fixed-rate bonds</p>
                <p>
                  Floating-rate bonds have variable interest as per the market
                  scenario and an external benchmark like the RBI’s repo rate.
                  On the other hand, Fixed-rate bonds offer a predetermined
                  interest rate, which remains constant throughout the tenure.
                </p>
                <p className="download_app_subtext text-black">4. Secured and unsecured bonds</p>
                <p className="download_app_subtext text-black">
                  Secured bonds are fully covered by collateral and offer
                  lenders an assurance that they can recover the loan amount in
                  case of default from the borrowing company. These are usually
                  identified assets that have a charge registered against them
                  for the bonds under consideration. On the other hand,
                  unsecured bonds have no collateral. In case of a default,
                  unsecured bonds are paid off by liquidating all unencumbered
                  assets of the company, and any proceeds left from secured
                  assets (against loans) that may remain after paying off the
                  secured creditors (including secured bond investors).
                </p>
                <p className="download_app_subtext text-black">5. Zero-coupon Bonds</p>
                <p  className="download_app_subtext text-black">
                  Zero-coupon bonds do not pay their holders regular coupon
                  payments or interest. These bonds are issued at a discount to
                  their face value. For example, a Rs 100 face value bond is
                  issued at Rs 80 to the investor. This means the company only
                  receives Rs 80 on a loan of Rs 100. At maturity, the entire
                  face value of the bond is repaid. Through this process, the
                  investor/lender has earned Rs 20 on the bond. <br /> Also
                  Read: &nbsp;
                  <a className="text-decoration-none download_app_subtext text-primary" href="">
                    Investing in Sovereign Gold Bonds: Benefits, Risks and
                    Eligibility
                  </a>
                </p>
                <p className="download_app_subtext text-black question_blog">What are the benefits of investing in corporate bonds?</p>
                <p className="download_app_subtext text-black">
                  Some of the advantages of investing in corporate bonds are as
                  follows:
                </p>
                <ul>
                  <li className="download_app_subtext text-black">
                    Steady income - Corporate bonds usually have fixed interest
                    rates. Furthermore, bondholders usually receive coupon
                    payments at regular intervals.
                  </li>
                  <li className="download_app_subtext text-black">
                    Diversification - Corporate bonds allow for an opportunity
                    to diversify your investment portfolio. Furthermore, you can
                    use it to reduce the overall risk profile of your portfolio
                    as they generate a stable and fixed income.
                  </li>
                </ul>
                <p className="download_app_subtext text-black">
                  Higher yields - Corporate bonds offer higher interest rates
                  than government bonds because of higher credit risk. A
                  high-rated corporate bond usually gives a lower coupon rate
                  than a below investment grade rated bonds.
                </p>
                <p className="download_app_subtext text-black fst-italic">
                  Disclaimer - This article is for information purposes only and
                  should not be considered investment advice. Please consult
                  your financial advisor and/or carry out your own research on
                  any of your planned investments.
                </p>
              </div>
            </div>
          </div>

          <div className="right_side_block">
            <div className="right_side_content">
              <div className="download_block text-center">
                <h3 className="sub_title fast_secure_title pt-4 pb-2">
                  Fast. Free. <br />
                  Secure.
                </h3>
                <p className="download_app_subtext text-black">
                  Download the Tagocash App Now!
                </p>
                <div className="img_app_block">
                  <div>
                    <img src={blog_content_right} width={"360px"} alt="" />
                  </div>

                  <div className="d-flex flex-column gap-3 app_link_block">
                    <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">
                          App Store
                        </p>
                        <img
                          src={app_store}
                          width={"23px"}
                          height={"23px"}
                          alt=""
                        />
                      </div>
                    </a>

                    <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">
                          Google Play
                        </p>
                        <img
                          src={google_play}
                          width={"23px"}
                          height={"23px"}
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="link_block d-flex border rounded-3 mt-5">
                <div className="p-4 border border-start-0 border-top-0 border-bottom-0">
                  <a href="">
                    <img src={linkedin} width={"24px"} height={"24px"} alt="" />
                  </a>
                </div>

                <div className="p-4 border border-start-0 border-top-0 border-bottom-0">
                  <a href="">
                    <img
                      src={instagram}
                      width={"24px"}
                      height={"24px"}
                      alt=""
                    />
                  </a>
                </div>

                <div className="p-4 border border-start-0 border-top-0 border-bottom-0">
                  <a href="">
                    <img src={twitter} width={"24px"} height={"24px"} alt="" />
                  </a>
                </div>

                <div className="p-4 border border-start-0 border-top-0 border-bottom-0">
                  <a href="">
                    <img src={facebook} width={"24px"} height={"24px"} alt="" />
                  </a>
                </div>

                <div className="p-4">
                  <a href="">
                    <img
                      src={formkit_link}
                      width={"24px"}
                      height={"24px"}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="my-4 sub_title more_article_title">More Articles like this</h3>
        <div className="d-flex justify-content-between mb-4">
          <div class="card shadow border-0 cards">
            <img
              src={blog_1}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                Simplifying payment methods code in our new API version
              </h5>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>

          <div class="card shadow border-0 cards">
            <img
              src={blog_2}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                Simplifying payment methods code in our new API version
              </h5>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>

          <div class="card shadow border-0 cards">
            <img
              src={blog_3}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                Simplifying payment methods code in our new API version
              </h5>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetterSection />
    </div>
  );
};

export default BlogContent;
