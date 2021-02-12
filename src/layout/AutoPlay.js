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
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  render() {
    console.log(this.state.height);
    console.log(this.state.width);

    let slidesNumber = this.state.height > 1200 ? 3 : 2;

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
        {/* <p>height: {this.state.height}</p>
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
