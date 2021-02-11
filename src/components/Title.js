import React from 'react';
import triangle from '../images/main/triangle.png';

const Title = ({ text }) => {
  return (
    <div className='page-title'>
      <img src={triangle} alt='' /> <h2 className='title'>{text}</h2>
    </div>
  );
};

export default Title;
