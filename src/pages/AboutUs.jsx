import React from 'react'
import AboutUsBanner from '../components/aboutusbanner/AboutUsBanner'
import Footer from '../components/footer/Footer'
import Facts from '../components/fact/Facts'
import TeamCardHolder from '../components/teammembers/teamcardholder/teamcardholder'



const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#1E2A38", overflow: "hidden" }}>
      <AboutUsBanner/>
      <Facts/>
      <TeamCardHolder/>
      <Footer/>
     
    </div>
  )
}

export default AboutUs