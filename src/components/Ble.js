import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  console.log(isSubmenuActive);
  const toggleSubmenu = () => setIsSubmenuActive(!isSubmenuActive);

  return (
    <div className='menu__container'>
      <ul className='menu__list'>
        <li
          className={
            hovered === true ? 'menu__item menu__item--active' : 'menu__item'
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          sprzęt{' '}
          <span className='menu__arrow-down' onClick={toggleSubmenu}>
            <i className='fas fa-angle-down'></i>
          </span>
          <ul className='menu__submenu'>
            <li
              className='menu__subitem'
              className={
                isSubmenuActive === true
                  ? 'menu__item menu__item--active'
                  : 'menu__item'
              }
            >
              <Link to='/magnum' className='menu__link'>
                {' '}
                pistol mangum
              </Link>
            </li>
            <li className='menu__subitem'>
              {' '}
              <Link to='/ak' className='menu__link'>
                {' '}
                ak 47
              </Link>
            </li>
            <li className='menu__subitem'>
              {' '}
              <Link to='/beretta' className='menu__link'>
                {' '}
                beretta
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={
            hovered === true ? 'menu__item menu__item--active' : 'menu__item'
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          odzież{' '}
          <span>
            <i className='fas fa-angle-down'></i>
          </span>
          <ul className='menu__submenu'>
            <li className='menu__subitem'>
              {' '}
              <Link to='/trousers' className='menu__link'>
                spodnie
              </Link>
            </li>
            <li className='menu__subitem'>
              {' '}
              <Link to='/jumper' className='menu__link'>
                {' '}
                bluzy
              </Link>
            </li>
            <li className='menu__subitem'>
              {' '}
              <Link to='/thisrt' className='menu__link'>
                {' '}
                koszulki
              </Link>
            </li>
          </ul>
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
    </div>
  );
};

export default Navbar;
