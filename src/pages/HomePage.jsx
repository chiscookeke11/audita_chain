import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Features from '../components/features/features'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div style={{backgroundColor: "#020A1B"}}>
        <Hero/>
        <Banner/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default HomePage