import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../AppContext';

import logo from '../images/header/logo_cut.png';
import basket from '../images/header/basket.png';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  const { currentLanguage, handleLanguage } = useContext(AppContext);

  const handleCheck = (e) => {
    handleLanguage(e.target.value);
  };

  const SwitchCase = (props) => {
    switch (props.value) {
      case 'PL':
        return 'Twoje konto';

      case 'GB':
        return 'Your Account';
      case 'DE':
        return 'Ihr Konto';
      case 'FR':
        return 'Votre compte';
      default:
        return 'Twoje konto';
    }
  };

  const menuList = () => {};

  return (
    <div className='header'>
      <div className='header__top-bar'>
        <div className='header__container'>
          {' '}
          <div className='header__contact'>
            {' '}
            <i className='fas fa-phone-volume header__ico'></i>
            <span>Tel: +48 517 989 511</span>
          </div>
          <div className='header__contact'>
            {' '}
            <i className='fas fa-envelope header__ico'></i>
            <span>Email: sklep@assasins-arms.com</span>
          </div>
          <div className='header__contact'>
            {' '}
            <i className='fab fa-facebook-f header__ico'></i>
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
                <i className='fas fa-search'></i>
              </div>
            </form>

            <form className='menu__language'>
              <select
                name='language'
                id='language-select'
                className='menu__country'
                onChange={(e) => handleCheck(e)}
                // value='sdf'
              >
                <option value='PL'>PL 🇵🇱 </option>
                <option value='GB'>GB 🇬🇧 </option>
                <option value='DE'>DE 🇩🇪 </option>
                <option value='FR'>FR 🇫🇷 </option>
              </select>
            </form>

            <div className='menu__account'>
              <SwitchCase value={currentLanguage} />
            </div>
            <div className='menu__basket'>
              <img src={basket} alt='basket' className='menu__basket-image' />
            </div>
          </div>
        </div>
        <div className='menu menu--middle'>
          <Navbar />
          {/* <div className='menu__container'>
            <ul className='menu__list'>
              <li className='menu__item'>
                sprzęt{' '}
                <span>
                  <i className='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                odzież{' '}
                <span>
                  <i className='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                kulki{' '}
                <span>
                  <i className='fas fa-angle-down'></i>
                </span>
              </li>
              <li className='menu__item'>
                wyprzedaże{' '}
                <span>
                  <i className='fas fa-angle-down'></i>
                </span>
              </li>
            </ul>
          </div> */}
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
