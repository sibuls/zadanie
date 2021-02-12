import React, { Component, useEffect } from 'react';
import Slider from 'react-slick';
import Goggle from '../components/Goggle';
import Title from '../components/Title';

import ReactDOM from 'react-dom';

export default class AutoPlay extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
    };

    window.addEventListener('resize', this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    // console.log(this.state.height);
    // console.log(this.state.width);

    let slidesNumber = this.state.width > 1200 ? 3 : 1;

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: slidesNumber,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    };

    return (
      <div className='autoplay'>
        {/* 
        <p>width: {this.state.width}</p> */}
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
