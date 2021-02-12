import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image';

import gunLarge from '../images/main/gun_large.png';
import gunBlack from '../images/main/gun_black.png';

class Slider extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
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

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    console.log(this.state.width);
    const slideImages = [
      gunLarge,
      gunLarge,
      gunLarge,
      gunLarge,
      gunLarge,
      gunLarge,
    ];

    const slideImages780 = [gunLarge, gunLarge, gunLarge, gunLarge];

    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: 'ease',
      indicators: (i) => (
        <div className='indicator'>
          <div className='indicator__container'>
            <img src={gunBlack} alt='basket' className='slide__img' />
          </div>
        </div>
      ),
    };

    return (
      <React.Fragment>
        <div className='slider'>
          {/* <p>height: {this.state.height}</p>
        <p>width: {this.state.width}</p> */}
          <div className='slide-container'>
            <div
              className='slide__arrow'
              onClick={this.back}
              type='button'
            ></div>
            <Slide ref={this.slideRef} {...properties}>
              {this.state.width > 770
                ? slideImages.map((each, index) => (
                    <div key={index} className='each-slide'>
                      <img
                        className='slide__image-large'
                        src={each}
                        alt='sample'
                      />
                    </div>
                  ))
                : slideImages780.map((each, index) => (
                    <div key={index} className='each-slide'>
                      <img
                        className='slide__image-large'
                        src={each}
                        alt='sample'
                      />
                    </div>
                  ))}
            </Slide>
            <div
              className='slide__arrow slide__arrow--down'
              onClick={this.next}
              type='button'
            ></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
