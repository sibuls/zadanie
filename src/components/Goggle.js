import React from 'react';
import goggleImg from '../images/main/goggle.png';

const Goggle = () => {
  return (
    <div className='goggle'>
      <div className='goggle__image'>
        <img src={goggleImg} alt='' />
      </div>
      <div className='goggle__container'>
        <p className='goggle__text text'>maska empire e-flex goggle (black)</p>

        <p className='goggle__price'>139,00 zł</p>
      </div>
    </div>
  );
};

export default Goggle;
