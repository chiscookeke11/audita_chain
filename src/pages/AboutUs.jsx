import React from 'react'
import AboutUsBanner from '../components/aboutusbanner/AboutUsBanner'
import Footer from '../components/footer/Footer'
import Team from '../components/teammembers/Team'
import Facts from '../components/fact/Facts'


const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#1E2A38", overflow: "hidden" }}>
      <AboutUsBanner/>
      <Facts/>
      <Team/>
      <Footer/>
     
    </div>
  )
}

export default AboutUs