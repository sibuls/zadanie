import React, { Component } from 'react';
import Slider from 'react-slick';
import Goggle from '../components/Goggle';
import Title from '../components/Title';
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
        <Title text='dobierz do kompletu' />

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
