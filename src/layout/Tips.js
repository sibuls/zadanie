import React from 'react';
import Title from '../components/Title';
import tip1 from '../images/main/tip1.png';
import tip2 from '../images/main/tip2.png';

const Tips = () => {
  return (
    <div className='tips'>
      <Title text='porady naszego eksperta' />

      <div className='tips__articles'>
        <article className='tips__article'>
          <h3 className='tips__title  '>Jak stworzyć samemu farby do gry?</h3>
          <div className='tips__container'>
            <div className='tips__box'>
              <img src={tip1} alt='' />
            </div>
            <div className='tips__content'>
              <p className='text text-articles'>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et
                eros non nisl iaculis ultricies eget nec odio. Fusce nec
                efficitur elit, non ullamcorper libero. Quisque consequat sapien
                in lacus condimentum posuere.
              </p>
            </div>
          </div>
        </article>
        <article className='tips__article'>
          <h3 className='tips__title  '>
            Jak dobrać naboje z farbą do mojego sprzętu?
          </h3>
          <div className='tips__container'>
            <div className='tips__box'>
              <img src={tip2} alt='' />
            </div>
            <div className='tips__content'>
              <p className=' text text-articles'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et
                eros non nisl iaculis ultricies eget nec odio. Fusce nec
                efficitur elit, non ullamcorper libero. Quisque consequat sapien
                in lacus condimentum posuere.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Tips;
