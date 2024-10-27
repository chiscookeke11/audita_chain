import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './team.css';

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Okeke Chinedu',
      description: 'Frontend Developer',
      image: 'https://github.com/chiscookeke11/Test-pagea/blob/main/nedu.jpg?raw=true',
      social: {
        github: 'link-to-instagram',
        twitter: 'link-to-twitter',
        linkedin: 'link-to-linkedin'
      }
    },
    {
      id: 2,
      name: 'John Smith',
      description: 'Blockchain expert with experience in smart contracts and DeFi.',
      image: '4.png',
      social: {
        instagram: 'link-to-instagram',
        twitter: 'link-to-twitter',
        linkedin: 'link-to-linkedin'
      }
    },
    // Add more team members here
  ];

  return (
    <Slider {...settings}>
      {teamMembers.map(member => (
        <div key={member.id} className='team-card-container'>
          <div className="card">
            <div className="image-container">
              <img src={member.image} alt={`${member.name}'s profile`} />
            </div>
            <div className="content">
              <h2 className="profile-name">{member.name}</h2>
              <p className="description">{member.description}</p>
            </div>
            <div className="social-links">
              <a href={member.social.instagram} className="instagram">
                <img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/github%20(1).svg" alt="Instagram logo" />
              </a>
              <a href={member.social.twitter} className="twitter">
                <img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/twitter-x%20(1).svg" alt="Twitter logo" />
              </a>
              <a href={member.social.linkedin} className="linkedin">
                <img src="https://raw.githubusercontent.com/chiscookeke11/Test-pagea/d465d9b2ab21d9481e135c535558bae7fde96193/linkedin.svg" alt="LinkedIn logo" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Team;
