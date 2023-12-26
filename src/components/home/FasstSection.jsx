import React from 'react'
import {fasst, fasst_tagocash_logo, fast, affordable, safe } from "../../assets";

const FasstSection = () => {
  return (
    <div className="hero_section">
        <div className="container">
        <div className="d-flex align-items-center gap-3">
            <div>
                <img src={fasst} width={"799px"} height={"416px"} alt="" />
            </div>

            <div>
                <img src={fasst_tagocash_logo} width={"358px"} height={"71px"} alt="" />
                <h3 className="cash_king_title">...because cash is king </h3>
            </div>
            </div>

            <div className='pb-5 margin_top'>
                <div className="d-flex gap-3 justify-content-center">
                <img src={fasst_tagocash_logo} width={"358px"} height={"71px"} alt="" />
                <h3 className="cash_king_title fasst_title">is F.A.S.S.T</h3>
                </div>
              
                <div className='d-flex justify-content-between mt-5'>
                    <div>
                        <div className='d-flex gap-3'>
                            <div className='svg_background d-flex align-items-center justify-content-center'>
                                <img src={fast} width={"28px"} height={"28px"} alt="" /> 
                            </div>
                            <h3 className='hero_subtitle'>Fast</h3>
                        </div>
                        <p className='fasst_feature_description fasst_fast_text_width'>Near real-time transaction </p>
                    </div>

                    <div>
                        <div className='d-flex gap-3'>
                            <div className='svg_background d-flex align-items-center justify-content-center'>
                                <img src={affordable} width={"22px"} height={"22px"} alt="" /> 
                            </div>
                            <h3 className='hero_subtitle'>Affordable</h3>
                        </div>
                        <p className='fasst_feature_description fasst_affordable_text_width'>0$ to 1% transfer fee available.</p>
                    </div>

                    <div>
                        <div className='d-flex gap-3'>
                            <div className='svg_background d-flex align-items-center justify-content-center'>
                                <img src={safe} width={"28px"} height={"28px"} alt="" /> 
                            </div>
                            <h3 className='hero_subtitle'>Safe</h3>
                        </div>
                        <p className='fasst_feature_description fasst_safe_text_width'>Only accessible to you </p>
                    </div>

                    <div>
                        <div className='d-flex gap-3'>
                            <div className='svg_background d-flex align-items-center justify-content-center'>
                                <img src={safe} width={"28px"} height={"28px"} alt="" /> 
                            </div>
                            <h3 className='hero_subtitle'>Secure</h3>
                        </div>
                        <p className='fasst_feature_description fasst_secure_text_width'>Bank-grade security technology </p>
                    </div>

                    <div>
                        <div className='d-flex gap-3'>
                            <div className='svg_background d-flex align-items-center justify-content-center'>
                                <img src={safe} width={"28px"} height={"28px"} alt="" /> 
                            </div>
                            <h3 className='hero_subtitle'>Transparent</h3>
                        </div>
                        <p className='fasst_feature_description fasst_secure_text_width'>No hidden fees. <br /> You pay what you see.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FasstSection
