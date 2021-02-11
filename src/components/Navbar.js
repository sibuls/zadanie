import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // const [hovered, setHovered] = useState(false);
  // const toggleHover = () => setHovered(!hovered);

  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  console.log(activeMenu);
  const list = [
    {
      menuName: 'sets',
      name: 'gotowe zestawy do gier',
      path: '/sets',
      // activeClassName: 'menu__item--activee',
      submenu1: 'Grom',
      submenu2: 'Commandos',
      submenu3: 'Marines',
      submenu4: 'Blues',
      submenu5: 'Top Gun',
    },
    {
      menuName: 'equipment',
      name: 'sprzęt',
      path: '/equipment',
      activeClassName: 'menu__item--active',
      submenu1: 'Tippmann Cronus',
      submenu2: 'Dye Proto Rail ',
      submenu3: 'Empire Mini',
      submenu4: 'Empire Axe',
      submenu5: 'Spyder MR100',
    },
    {
      menuName: 'clothes',
      name: 'odzież',
      path: '/clothes',
      // activeClassName: 'menu__item--active',
      submenu1: 'Kostiumy',
      submenu2: 'Koszulki',
      submenu3: 'Spodnie',
      submenu4: 'Kaski',
    },
    {
      menuName: 'balls',
      name: 'kulki',
      path: '/balls',
      // activeClassName: 'menu__item--activee',
      submenu1: 'Kulki niebieskie 500szt',
      submenu2: 'Kulki zielone 500szt',
      submenu3: 'Kulki czerwone 10szt',
    },
    {
      menuName: 'outlet',
      name: 'wyprzedaże',
      path: '/outlet',
      // activeClassName: 'menu__item--activee',
      submenu1: 'Karnety',
      submenu2: 'Zestawy',
      submenu3: 'Kombinezony',
    },
  ];

  const menu = list.map((item) => (
    <li
      key={item.name}
      name={item.menuName}
      className='menu__item'
      // onMouseEnter={toggleHover}
      onMouseLeave={() => handleMenuClick(' ')}
      onClick={() => handleMenuClick(item.menuName)}
    >
      {' '}
      <NavLink
        exact={item.exact}
        to={item.path}
        activeClassName={item.activeClassName}
        className='menu__link'
      >
        {item.name}{' '}
        <span>
          <i className='fas fa-angle-down'></i>
        </span>
        <ul
          className={
            activeMenu === item.menuName
              ? 'menu__submenu menu__submenu--active'
              : 'menu__submenu'
          }
        >
          <li className='menu__subitem'>
            <NavLink to={item.path} className='menu__link'>
              {item.submenu1}
            </NavLink>
          </li>
          <li className='menu__subitem'>
            <NavLink to={item.path} className='menu__link'>
              {item.submenu2}
            </NavLink>
          </li>
          <li className='menu__subitem'>
            <NavLink to={item.path} className='menu__link'>
              {item.submenu3}
            </NavLink>
          </li>

          <li className='menu__subitem'>
            <NavLink to={item.path} className='menu__link'>
              {item.submenu4}
            </NavLink>
          </li>
          <li className='menu__subitem'>
            <NavLink to={item.path} className='menu__link'>
              {item.submenu5}
            </NavLink>
          </li>
        </ul>
      </NavLink>
    </li>
  ));

  return (
    <div className='menu__container'>
      <ul className='menu__list'>{menu}</ul>
    </div>
  );
};

export default Navbar;
