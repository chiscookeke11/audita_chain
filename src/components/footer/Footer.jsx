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
                <a href="#"><img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/youtube.svg" alt="" /></a>
                <a href="#"><img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/linkedin.svg" alt="" /></a>
                <a href="#"><img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/whatsapp.svg" alt="" /></a>
                <a href="#"><img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/instagram%20(1).svg" alt="" /></a>
                <a href="#"><img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/facebook.svg" alt="" /></a>
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
            <h3>Company</h3>
            <li>About</li>
            <li>Commerce</li>
            <li>Courses</li>
            <li>Contact Us</li>
            <li>Knowledge</li>
            <li>Demo</li>
           </ul> 
        </div>
    </div>
  )
}

export default Footer