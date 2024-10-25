import React from 'react';
import './banner.css';
import { image } from '../images';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Banner = () => {
  
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card4Ref, inView: card4InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card5Ref, inView: card5InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: card6Ref, inView: card6InView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
            <div 
              ref={card1Ref} 
              className={`card ${card1InView ? 'animate__animated animate__bounce' : ''}`}
            >
              <h2>Security</h2>
              <p>Our blockchain auditing app boasts robust,
                cutting-edge security measures to safeguard 
                audit data, ensuring confidentiality, integrity, and compliance.</p>
              <img src={image.security_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div 
              ref={card2Ref} 
              className={`card ${card2InView ? 'animate__animated animate__bounce' : ''}`}
            >
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
            <div 
              ref={card3Ref} 
              className={`card ${card3InView ? 'animate__animated animate__bounce' : ''}`}
            >
              <h2>Scalability</h2>
              <p>Our blockchain auditing app ensures
                the scalability needed to grow alongside business demands.</p>
              <img src={image.scalability_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div 
              ref={card4Ref} 
              className={`card ${card4InView ? 'animate__animated animate__bounce' : ''}`}
            >
              <h2>Accuracy</h2>
              <p>Our blockchain auditing app ensures precise 
                financial reporting, empowering informed decision-making.</p>
              <img src={image.accuracy} alt="" />
            </div>
          </span>
        </div>

        <div className="card-wrapper">
          <span className="card-background">
            <div 
              ref={card5Ref} 
              className={`card ${card5InView ? 'animate__animated animate__bounce' : ''}`}
            >
              <h2>Cost Effectiveness</h2>
              <p>Our blockchain auditing app reduces cost, 
                enhances financial efficiency, and streamlines reporting.</p>
              <img src={image.cost_effectiveness_img} alt="" />
            </div>
          </span>

          <span className="card-background">
            <div 
              ref={card6Ref} 
              className={`card ${card6InView ? 'animate__animated animate__bounce' : ''}`}
            >
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
