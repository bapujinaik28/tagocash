import React from 'react'
import {blog_1, blog_2, blog_3} from "../../assets"


const Blogs = () => {
  return (
    <div className='blog_section margin_top mb-5'>
        <div className='container'>
            <div>
                <h3 className='hero_title'><span className="hero_title_tago">Tago </span>Blogs</h3>
                <p className='sub_text blogs_subtext'>Read more and make better choices for your Financial future</p>
            </div>

            <div className='d-flex justify-content-between my-5'>
                <div>
                    <img src={blog_1} width={"580px"} height={"435px"} alt="" />
                </div>
                <div>
                <div className="card-body rounded shadow py-4 px-5">
                        <div className='featured_article mb-4'>
                            <p className='blog_type_text featured_article_text p-2'>Featured Article</p>
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text blogs_page_subtext'>Product</p>
                                <span className='filled_circle_blog bg-primary'></span>
                                <p className='blog_type_text blogs_page_subtext'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text blogs_page_subtext'>7 Min Read</p>
                            </div>
                        </div>
                        <h5 className="card-title hero_subtitle card_title">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext card_text mt-2 mb-5">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        <div className='d-flex justify-content-between pt-3'>
                            <div>
                                <a className='blog_type_text blogs_page_subtext text-decoration-none' href="/blogcontent">Read More &nbsp; &gt;</a>
                            </div>

                            <div>
                            <p className='blog_type_text blogs_page_subtext'>20th Oct 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-4 blog_margin_top">
                <div class="card shadow border-0 cards">
                    <img src={blog_1} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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
                    <img src={blog_2} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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
                    <img src={blog_3} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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

            <div className="d-flex justify-content-between my-5">
                <div class="card shadow border-0 cards">
                    <img src={blog_1} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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
                    <img src={blog_2} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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
                    <img src={blog_3} className="card-img-top p-2" alt="" width={"368px"} height={"268px"} />
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
        </div>
    </div>
  )
}

export default Blogs
