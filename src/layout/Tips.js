import React from 'react';
import Title from '../components/Title';

const Tips = () => {
  return (
    <div className='tips'>
      <Title text='porady naszego eksperta' />

      <div className='tips__articles'>
        <article className='tips__article'>
          <h3 className='tips__title  '>Jak stworzyć samemu farby do gry?</h3>
          <div className='tips__container'>
            <div className='tips-box'></div>
            <div className='tips__content'></div>
          </div>
        </article>
        <article className='tips__article'>
          <h3 className='tips__title  '>
            Jak dobrać naboje z farbą do mojego sprzętu?
          </h3>
          <div className='tips__container'>
            <div className='tips-box'></div>
            <div className='tips__content'></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Tips;
