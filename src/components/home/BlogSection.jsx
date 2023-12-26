import React from 'react'
import {blog_1, blog_2, blog_3} from "../../assets"

const BlogSection = () => {
  return (
    <div className='blog_section margin_top mb-5'>
        <div className='container'>
            <div>
                <h3 className='blog_title sub_title'>Stay Updated with our Blog</h3>
            </div>

            <div className="d-flex justify-content-between my-4">
                <div class="card shadow border-0 cards">
                    <img src={blog_1} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>

                <div class="card shadow border-0 cards">
                    <img src={blog_2} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>

                <div class="card shadow border-0 cards">
                    <img src={blog_3} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <a href="/blogs">
                    <button type="button" class="btn btn-primary rounded-5 px-3 py-2 mt-3">View All Blogs</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogSection
