import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div>
        <h2>ABOUT AUDITABLOCK</h2>
        <h1>Why Auditablock ?</h1>
        <p>lorem ipsum ipsum ipsum</p>

        <div className="card-container">
            <div className="card">
                <h2>Security</h2>
                <p>Our blockchain auditing app boast robust,
cutting-edge security measures to safeguard 
audit data, ensuring confidentiality, integrity and
compliance</p>
<img src="" alt="" />
                </div>

            <div className="card"><h2>Security</h2></div>
            <div className="card"><h2>Security</h2></div>
            <div className="card"><h2>Security</h2></div>
            <div className="card"><h2>Security</h2></div>
            <div className="card"><h2>Security</h2></div>
        </div>
    </div>
  )
}

export default Banner