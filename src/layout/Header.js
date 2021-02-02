import React from 'react';

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
            <div className='menu__logo'></div>
            <div className='menu__search'></div>
            <div className='menu__language'></div>
            <div className='menu__account'></div>
            <div className='menu__basket'></div>
            top
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
