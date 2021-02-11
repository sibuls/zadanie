import React from 'react';
import banner from '../images/aside/banner.png';
import splash from '../images/main/splash.png';

const itemsData = [
  {
    name: 'Numer seryjny',
    info: '1e546831000',
  },
  {
    name: 'Model',
    info: 'TIPPMAN FT-50 LITE 50',
  },
  {
    name: 'Wykończenie',
    info: 'czarny mat',
  },

  {
    name: 'Kaliber',
    info: '66 LR HV',
  },
  {
    name: 'Pojemność magazynka',
    info: '10 nabojów',
  },
  {
    name: 'Mechanizm spustowy',
    info: 'SA (Single Action)',
  },
  {
    name: 'Siła nacisku spustu',
    info: '1.8kg/4lb',
  },
  {
    name: 'Wymiary',
    info: '1200x123mm',
  },
];

const tipmap = itemsData.map((item, index) => (
  <li key={index} className='aside__text'>
    <p className='aside__name'> {item.name}</p>
    <p className='aside__info'>{item.info}</p>
  </li>
));

const Aside = () => {
  return (
    <div className='aside'>
      <div className='aside__container'>
        <div className='aside__box'>
          <img src={banner} alt='banner' />
          <div className='aside__advert-box'>
            <p className='aside__advert-text  white aside__advert-text--large'>
              Usługi serwisowe
            </p>
            <p className='aside__advert-text  white '>
              Na sprzęt zakupiony w sklepie
            </p>
            <p className='aside__advert-text  white aside__advert-text--large'>
              stały rabat -25%
            </p>

            <p className='aside__btn white'> sprawdź</p>
          </div>
        </div>
        <div className='aside__content'>
          <ul> {tipmap}</ul>
        </div>
      </div>
      <div className='aside__splash'>
        {' '}
        <img src={splash} alt='' />
      </div>
    </div>
  );
};

export default Aside;
