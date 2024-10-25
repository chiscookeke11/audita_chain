import React from 'react'
import AboutUsBanner from '../components/about_us_banner/AboutUsBanner'
import Footer from '../components/footer/Footer'
import Facts from '../components/Facts/facts'
import TeamCard from '../teamcard/Teamcard'

const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner/>
      <Facts/>
      <TeamCard/>
      <Footer/>

    </div>
  )
}

export default AboutUs