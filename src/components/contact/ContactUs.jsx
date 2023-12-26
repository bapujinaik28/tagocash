import React from 'react'
import { contacts } from '../../assets'

const ContactUs = () => {
  return (
    <div className="contact_section">
      <div className='container'>
      <div className='d-md-flex'>
        <div className='left_sided_contact margin_top pb-md-5 contact_block'>
            <div className='ms-5'>
                <img className='contacts_size' src={contacts} height={"188px"} width={"188px"} alt="" />
            </div>
            <div className='mt-md-5 mt-4 ms-2'>
                <h3 className='hero_title contact_title'>Contact us</h3>
                <p className='sub_text contact_subtext mb-3'>Please feel free to reach out and let our team assist you.</p>
            </div>
        </div>
        <div className="form_section  margin_top">
        <div class="mb-4">
          <input type="text" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput1" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput2" placeholder="Enter Email" />
        </div>
        <div class="mb-4">
          <input type="text" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput3" placeholder="Enter Role" />
        </div>
        <div class="mb-4">
          <textarea class="form-control rounded-5 px-3 py-3" id="exampleFormControlTextarea4" rows="3" placeholder='Enter Message'></textarea>
      </div>
      <div class="form-check mb-4">
      <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
      I would like to <strong>subscribe</strong> and await new information 
      </label>
      </div>
      <div className='submit_btn'>
        <button type="button" class="btn btn-primary rounded-5 px-5 submit_btn">Submit</button>
      </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUs
