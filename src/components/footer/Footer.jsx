import React from 'react'
import './footer.css'
import { image } from '../images'

const Footer = () => {
  return (
    <div className='footer'>


        <div>
            <h1>AuditaBlock</h1>
            <p>AuditaBlock Streamlines auditing processes, enhancing efficency, transparency and security</p>
            <div className="icons">
                <a href="#"><img src={image.youtube} alt="" /></a>
                <a href="#"><img src={image.linkedin} alt="" /></a>
                <a href="#"><img src={image.whatsapp} alt="" /></a>
                <a href="#"><img src={image.instagram} alt="" /></a>
                <a href="#"><img src={image.facebook} alt="" /></a>
            </div>
        </div>


        <div>
           <ul>

            <h3>Product</h3>
            <li>Benefits</li>
            <li>Security</li>
            <li>Affiliates</li>
            <li>E-commerce</li>
           </ul>
        </div>

        <div>
        <ul>
            <h3>Navigation</h3>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
           </ul>          
        </div>


        <div>
          
        <ul>
            <h3>Navigation</h3>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
           </ul> 
        </div>
    </div>
  )
}

export default Footer