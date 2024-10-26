import React from 'react';
import './banner.css';
import { image } from '../images';

const Banner = () => {
  return (
    <div className='banner'>
      <h3>ABOUT AUDITABLOCK</h3>
      <h1>Why Auditablock ?</h1>
      <p>Blockchain auditing utilizes blockchain <br /> technology to 
        securely record, store and verify audit data.
      </p>

      <div className="card-container">

        <div className="card-wrapper">
          <span className="card-background">
            <div className='card'>
              <h2>Security</h2>
              <p>Our blockchain auditing app boasts robust,
                cutting-edge security measures to safeguard 
                audit data, ensuring confidentiality, integrity, and compliance.</p>
              <img src={image.security_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div className='card'>
              <h2>Transparency</h2>
              <p>Our blockchain auditing app prioritizes 
                security, ensuring the integrity and confidentiality
                of audit data.</p>
              <img src={image.transparency_img} alt="" />
            </div>
          </span>
        </div>

        <div className="card-wrapper">
          <span className="card-background">
            <div className='card'>
              <h2>Scalability</h2>
              <p>Our blockchain auditing app ensures
                the scalability needed to grow alongside business demands.</p>
              <img src={image.scalability_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div className='card'>
              <h2>Accuracy</h2>
              <p>Our blockchain auditing app ensures precise 
                financial reporting, empowering informed decision-making.</p>
              <img src={image.accuracy} alt="" />
            </div>
          </span>
        </div>

        <div className="card-wrapper">
          <span className="card-background">
            <div className='card'>
              <h2>Cost Effectiveness</h2>
              <p>Our blockchain auditing app reduces cost, 
                enhances financial efficiency, and streamlines reporting.</p>
              <img src={image.cost_effectiveness_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div className='card'>
              <h2>Efficiency</h2>
              <p>Our blockchain auditing app optimizes 
                financial reporting, reducing time and costs.</p>
              <img src={image.efficiency_img} alt="" />
            </div>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Banner;
