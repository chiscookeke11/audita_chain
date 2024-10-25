import React from 'react'
import AboutUsBanner from '../components/aboutusbanner/AboutUsBanner'
import Footer from '../components/footer/Footer'
import Facts from '../components/Facts/Facts'
import Team from '../components/teammembers/Team'


const AboutUs = () => {
  return (
    <div>
      <AboutUsBanner/>
      <Facts/>
      <Team/>
      <Footer/>
     
    </div>
  )
}

export default AboutUs