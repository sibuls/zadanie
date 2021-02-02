import React from 'react';
import logo from '../images/header/logo_cut.png';

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
            <div className='menu__search'>
              <input
                type='text'
                placeholder='Wpisz czego szukasz...'
                className='menu__search-input'
              />
              <div className='menu__search-ico'>
                <i class='fas fa-search'></i>
              </div>
            </div>
            <div className='menu__language'></div>
            <div className='menu__account'>a</div>
            <div className='menu__basket'>b</div>
          </div>
        </div>
        <div className='menu menu--middle'>
          <div className='menu__container'>middle</div>
        </div>
        <div className='menu menu--bottom'>
          <div className='menu__container'>bottom</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
