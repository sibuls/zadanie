import React from 'react';

import logo from '../images/header/logo_cut.png';
import basket from '../images/header/basket.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__top-bar'>
        <div className='header__container'>
          {' '}
          <div className='header__contact'>
            {' '}
            <i class='fas fa-phone-volume header__ico'></i>
            <span>Tel: +48 517 989 511</span>
          </div>
          <div className='header__contact'>
            {' '}
            <i class='fas fa-envelope header__ico'></i>
            <span>Email: sklep@assasins-arms.com</span>
          </div>
          <div className='header__contact'>
            {' '}
            <i class='fab fa-facebook-f header__ico'></i>
            <span>assasinsarms</span>
          </div>
        </div>
      </div>

      <div className='header__main'>
        <div className='menu  menu--top'>
          <div className='menu__container'>
            <div className='menu__logo'>
              <img
                src={logo}
                alt='Assasins Arms Shop logo'
                className='menu__logo-image'
              />
            </div>
            <form action='' className='menu__search'>
              <input
                type='text'
                placeholder='Wpisz czego szukasz...'
                className='menu__search-input'
              />
              <div className='menu__search-ico'>
                <i class='fas fa-search'></i>
              </div>
            </form>

            <div className='menu__language'>
              <select className='menu__country'>
                <option value='PL'>PL 🇵🇱 </option>
                <option value='GB'>GB 🇬🇧 </option>
                <option value='DE'>DE 🇩🇪 </option>
                <option value='GB'>FR 🇫🇷 </option>
              </select>
            </div>

            <div className='menu__account'>Twoje konto</div>
            <div className='menu__basket'>
              <img src={basket} alt='basket' className='menu__basket-image' />
            </div>
          </div>
        </div>
        <div className='menu menu--middle'>
          <div className='menu__container'>
            <ul className='menu__list'>
              <li className='menu__item'>
                sprzęt{' '}
                <span>
                  <i class='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                odzież{' '}
                <span>
                  <i class='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                kulki{' '}
                <span>
                  <i class='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                wyprzedaże{' '}
                <span>
                  <i class='fas fa-angle-down'></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='menu menu--bottom'>
          <div className='menu__container'>
            <ul className='menu__list'>
              <li className='menu__path'>Strona główna</li>
              <span className='menu__path'>>></span>
              <li className='menu__path'>Sprzęt</li>
              <span className='menu__path'>>></span>
              <li className='menu__path'>Marker Tippman FT-50 lite</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
