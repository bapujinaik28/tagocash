import React from 'react'
import { news_letter } from '../../assets'

const NewsLetterSection = () => {
  return (
    <div className='news_letter_section'>
      <div className="container">
        <div className="d-flex">
          <div>
              <img src={news_letter} width={"600px"} height={"269px"} alt="" />
          </div>
          
          <div className='mt-5'>
              <div>
                  <h3 className='sub_title first_to_know_color'>Be the First to know!</h3>
                  <p className='sub_text first_to_know_color'>Subscribe to our newsletter to stay up to data </p>
              </div>
              <div className='d-flex gap-5 subscribe_block mt-4'>
                  <input type="email" className='form-control outline-none border-0 hover-none rounded-5' placeholder="example@xyz.com" name="" id="" />
                  <button type="submit" className="btn btn-primary rounded-5 px-3">Subscribe</button>
              </div>

              {/* <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="example@xyz.com" aria-label="example@xyz.com" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterSection
