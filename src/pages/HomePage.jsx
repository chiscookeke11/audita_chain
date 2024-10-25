import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Features from '../components/features/features'
import Footer from '../components/footer/Footer'
import Testimonials from '../components/testimonials/Testimonials'
import './page_style.css'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Hero/>
        <Banner/>
        <Features/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default HomePage