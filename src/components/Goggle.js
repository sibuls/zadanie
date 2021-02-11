import React from 'react';
import goggleImg from '../images/main/goggle.png';

const Goggle = () => {
  return (
    <div className='goggle'>
      <div className='goggle__image'>
        <img src={goggleImg} alt='' />
      </div>
      <div className='goggle__container'>
        <p className='text'>maska empire e-flex</p>
        <p className='text'>goggle (black)</p>

        <p className='goggle__price'></p>
      </div>
    </div>
  );
};

export default Goggle;
