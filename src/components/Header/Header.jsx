// Header.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="header-container">
      <Slider {...settings}>
        <div className='swiper'>
          <h4>book your <br /> medical center ONLINE</h4>
        
        </div>
        <div className='swiper'>
         
        </div>
        <div className='swiper'>
        
        <img src="../../assets/images/carousel1.jpg" alt=""  className='swiper-img' />
        </div>
        
      </Slider>
      
    </div>
  );
}

export default Header;
