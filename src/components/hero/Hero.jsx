import React from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import { image } from '../images';

const Hero = () => {
  
  const { ref: leftTextRef, inView: leftTextInView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  const { ref: rightImageRef, inView: rightImageInView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div className="Hero">
      {/* left-side */}
      <div
        ref={leftTextRef} 
        className={`text ${leftTextInView ? 'animate__animated animate__fadeInLeft' : ''}`} 
      >
        <h1>Blockchain</h1>
        <h2>Decentralized Auditing System</h2>
        <p>
          A decentralized voting website solves critical problems associated with traditional voting systems.
        </p>
        <button>
          <span></span>Learn More
        </button>
      </div>

      {/* right-side */}
      <div
        ref={rightImageRef} 
        className={`image_holder ${rightImageInView ? 'animate__animated animate__fadeInRight' : ''}`}
      >
        <img src={image.banner_img} alt="Blockchain banner" />
      </div>

      <hr />
    </div>
  );
};

export default Hero;
