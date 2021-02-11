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

import imgLogo from '../images/footer/footer_logo.png';

const footerBgc = (
  <div className='footer_bgc'>
    {' '}
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
  </div>
);

const Footer = () => {
  return (
    <div className='footer'>
      {footerBgc}
      <div className='footer__wrapper'>
        <div className='footer__info'>
          {' '}
          <div className='footer__container'>
            <h3 className='footer__title'>informacje</h3>
            <ul>
              <li>Informacje o sklepie</li>
              <li>Wysyłka</li>
              <li>Regulamin</li>
              <li>Polityka prywatności</li>
              <li>Odstąpienie od umowy</li>
            </ul>
          </div>
          <div className='footer__container'>
            {' '}
            <h3 className='footer__title'>moje konto</h3>
            <ul>
              <li>Zarejestruj się</li>
              <li>Moje zamówienia</li>
              <li>Koszyk</li>
              <li>Ulubione</li>
              <li>Historia transakcji</li>
            </ul>
          </div>
          <div className='footer__container '>
            {' '}
            <h3 className='footer__title'>kontakt</h3>
            <p className='footer__number'>+48 574 046 421</p>
            <a href='mailto: kontakt@assasinarmy.pl' className='footer__email'>
              kontakt@assasinarmy.pl
            </a>
            <div className='footer__social'>
              <i class='fab fa-facebook-f   footer__social-ico'></i>
              <i class='fab fa-instagram   footer__social-ico'></i>
            </div>
          </div>
          <div className='footer__container'>
            {' '}
            <h3 className='footer__title'>moje zamówienia</h3>
            <ul>
              <li>
                <i class='fas fa-shipping-fast footer__ico'></i>
                Sprawdź status zamówienia
              </li>
              <li>
                {' '}
                <i class='fas fa-search footer__ico'></i> Śledź przesyłkę
              </li>
              <li>
                <i class='far fa-thumbs-down footer__ico'></i>
                Reklamacje
              </li>
              <li>
                <i class='fas fa-reply footer__ico'></i>
                Zwroty
              </li>
              <li>
                <i class='fas fa-info-circle footer__ico'></i>Informacje o
                wymianie
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__logo'>
          <img src={imgLogo} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
