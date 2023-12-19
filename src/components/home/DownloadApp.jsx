import React from 'react'
import {download_section_logo, play_store, app_store} from "../../assets"

const DownloadApp = () => {
  return (
    <div className='download_app_section mt-5'> 
        <div className='position-absolute end-0 pe-4'>
            <img src={download_section_logo} height={"180px"} width={"408px"} alt="" />
        </div>
      <div className="container">
        <div className="d-flex align-items-center download_app_gap">
            <div className='mt-5'>
                <h3 className='sub_title first_to_know_color'>Fast. Free. Secure.</h3>
                <p className='download_app_subtext first_to_know_color'>Download the Tagocash App Now!</p>
            </div>

            <div className="d-flex gap-3 mt-5">
                <a href="">
                    <img src={play_store} width={"163px"} height={"52px"} alt="play store" />
                </a>
                <a href="">
                <img src={app_store} width={"163px"} height={"52px"} alt="app store" />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
