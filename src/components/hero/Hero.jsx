import React from 'react';
import './hero.css';
import { image } from '../images';

const Hero = () => {
  

  return (

    <div className="Hero">

      {/* left-side */}
      <div className='text' > 
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
      <div className='image_holder'>
      
        <img src={image.banner_img} alt="Blockchain banner" />
      </div>

      <hr />
    </div>
  );
};

export default Hero;
