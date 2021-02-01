import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__top-bar'>
        <div className='header__phone'>
          {' '}
          <i class='fas fa-phone-volume'></i>
          <p>Tel: +48 517 989 511</p>
        </div>
        <div className='header__email'>
          {' '}
          <i class='fas fa-envelope'></i>
          <p>Email: sklep@assasins-arms.com</p>
        </div>
        <div className='header__facebook'>
          {' '}
          <i class='fab fa-facebook-f'></i>
          <p>assasinsarms</p>
        </div>
      </div>

      <div className='header__main'>
        <div className='header__menu'></div>
      </div>
    </div>
  );
};

export default Header;
