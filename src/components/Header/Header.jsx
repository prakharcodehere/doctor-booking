// Header.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';
import Carousel1 from "../../assets/images/carousel1.jpg"
import Carousel2 from "../../assets/images/carusel2.jpg"
import Carousel3 from "../../assets/images/carousel3.jpg"

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
      <Slider {...settings} className='slider-wrapper'>
        <div className='swiper'>
          <h4>book your <br /> medical center ONLINE</h4>
          <img src={Carousel1} alt="carousel" />
        </div>
        <div className='swiper'>
        <img src={Carousel2} alt="carousel" />
         
        </div>
        <div className='swiper'>
        
        <img src={Carousel3} alt=""  className='swiper-img' />
        </div>
        
      </Slider>
      
    </div>
  );
}

export default Header;
