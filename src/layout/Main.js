import React from 'react';
import Shopping from '../components/Shopping';
import Slider from '../components/Slider';

const Maddin = () => {
  return (
    <React.Fragment>
      <div className='main'>
        {' '}
        <Slider />
        <Shopping />
      </div>
    </React.Fragment>
  );
};

export default Maddin;
