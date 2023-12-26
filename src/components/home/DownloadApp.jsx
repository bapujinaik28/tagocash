import React from 'react'
import {download_section_logo, google_play, app_store} from "../../assets"

const DownloadApp = () => {
  return (
    <div className='download_app_section position-relative mt-5'> 
        <div className='position-absolute end-0 pe-4'>
            <img src={download_section_logo} height={"180px"} width={"408px"} alt="" />
        </div>
        <div className="d-flex gap-3 mt- app_link_position">
            <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">Google Play</p>
                        <img src={google_play} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
                    <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">App Store</p>
                        <img src={app_store} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
        </div>
      <div className="container">
        <div className="d-flex align-items-center">
            <div className='mt-5 ms-5'>
                <h3 className='sub_title first_to_know_color'>Fast. Free. Secure.</h3>
                <p className='download_app_subtext first_to_know_color'>Download the Tagocash App Now!</p>
            </div>

            
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
