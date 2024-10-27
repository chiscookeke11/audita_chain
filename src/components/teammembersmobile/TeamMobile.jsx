import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { image } from '../images';
import '../banner/banner.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: image.security_img,
      caption: 'This is the caption for Slide 1',
      name: 'chinedu',
    },
    {
      id: 2,
      image: image.transparency_img,
      caption: 'This is the caption for Slide 2',
    },
    {
      id: 3,
      image: image.scalability_img,
      caption: 'This is the caption for Slide 3',
    },
    {
      id: 4,
      image: image.accuracy,
      caption: 'This is the caption for Slide 4',
    },
    {
      id: 5,
      image: image.cost_effectiveness_img,
      caption: 'This is the caption for Slide 5',
    },
    {
        id: 6,
        image: image.efficiency_img,
        caption: 'This is the caption for Slide 5',
      },
  ];

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id} className='mobile-card'>
            <h2>{slide.name}</h2>
          <p>{slide.caption}</p> {/* Displaying the caption */}
          <img src={slide.image} alt={`Slide ${slide.id}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
