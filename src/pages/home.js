import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FasstSection from '../components/home/FasstSection'
import PaymentProcess from '../components/home/PaymentProcess'
import NewsLetterSection from '../components/home/NewsLetterSection'
import DownloadApp from '../components/home/DownloadApp'
import BlogSection from '../components/home/BlogSection'
import MoreWithTagoCash from '../components/home/MoreWithTagoCash'


const home = () => {
  return (
    <div>
      <HeroSection />
      <FasstSection/>
      <PaymentProcess/>
      <DownloadApp/>
      <MoreWithTagoCash/>
      <BlogSection />
      <NewsLetterSection/>
    </div>
  )
}

export default home
