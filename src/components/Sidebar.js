import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    <Menu {...props}>
      <a className='menu-item' href='/'>
        gotowe zestawy
      </a>
      <a className='menu-item' href='/about'>
        sprzęt
      </a>
      <a className='menu-item' href='/services'>
        odzież
      </a>
      <a className='menu-item' href='/contact'>
        kulki
      </a>
      <a className='menu-item' href='/contact'>
        wyprzedaże
      </a>
    </Menu>
  );
};
