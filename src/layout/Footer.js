import React from 'react';
import imgBottom from '../images/footer/ground_bottom.png';
import imgTop from '../images/footer/ground_top.png';
import imgSoldier1 from '../images/footer/soldier_1.png';
import imgSoldier2 from '../images/footer/soldier_2.png';
import imgSoldier3 from '../images/footer/soldier_3.png';
import imgSoldier4 from '../images/footer/soldier_4.png';
import imgSoldier5 from '../images/footer/soldier_5.png';
import imgSoldiersFlag from '../images/footer/soldiers_flag.png';
import imgSoldiersTires from '../images/footer/tires.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__ground-grey'>
        <img src={imgTop} alt='ground' />
      </div>
      <div className='footer__ground-black'>
        <img src={imgBottom} alt='ground' />
        <div className='footer__soldier footer__soldier--1'>
          <img src={imgSoldier1} alt='soldier' />
        </div>{' '}
        <div className='footer__soldier footer__soldier--2'>
          {' '}
          <img src={imgSoldier2} alt='soldier' />
        </div>
        <div className='footer__soldier footer__soldier--3'>
          {' '}
          <img src={imgSoldier3} alt='soldier' />
        </div>
        <div className='footer__soldier footer__soldier--4'>
          {' '}
          <img src={imgSoldier4} alt='soldier' />
        </div>
        <div className='footer__soldier footer__soldier--5'>
          {' '}
          <img src={imgSoldier5} alt='soldier' />
        </div>
        <div className='footer__flag'>
          {' '}
          <img src={imgSoldiersFlag} alt='flag' />
        </div>
        <div className='footer__tires'>
          {' '}
          <img src={imgSoldiersTires} alt='tires' />
        </div>
      </div>

      <div className='footer__wrapper'></div>
    </div>
  );
};

export default Footer;
