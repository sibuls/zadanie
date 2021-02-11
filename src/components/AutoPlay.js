import React, { Component } from 'react';
import Slider from 'react-slick';
import Goggle from './Goggle';
import triangle from '../images/main/triangle.png';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    };
    return (
      <div className='autoplay'>
        <div className='autoplay__title'>
          <img src={triangle} alt='' />{' '}
          <h2 className='title'>dobierz do kompletu</h2>
        </div>

        <Slider {...settings}>
          <Goggle />
          <Goggle />
          <Goggle />
          <Goggle />
          <Goggle />
        </Slider>
      </div>
    );
  }
}
