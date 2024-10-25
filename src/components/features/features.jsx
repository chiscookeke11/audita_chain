import React from 'react';
import { image } from '../images';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import './features.css';

const Features = () => {

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='features'>
      
      {/* Image with animation */}
      <div 
        ref={imageRef} 
        className={`image ${imageInView ? 'animate__animated animate__fadeInLeft' : ''}`}
      >
        <img src={image.feature_img} alt="" />
      </div>

      {/* Text with animation */}
      <div 
        ref={textRef} 
        className={`text ${textInView ? 'animate__animated animate__fadeInRight' : ''}`}
      >
        <h3>Features</h3>
        <h1>Unlocking Audit Confidence</h1>
        <ul>
          <li>AuditaBlock ensures immutable audit records, safeguarding data 
              integrity and preventing tampering. Its real-time tracking 
              capability provides instant visibility into audit processes, 
              enhancing transparency and stakeholder confidence.</li>

          <li>Automated compliance ensures adherence to regulatory standards, 
              mitigating risks and penalties. Decentralized data storage
              protects sensitive information, guaranteeing accessibility and security.</li>  

          <li>AuditBlock’s smart contract technology streamlines audit workflows, 
              minimizing manual errors. Advanced analytics provide actionable insights, 
              informing strategic business decisions.</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
