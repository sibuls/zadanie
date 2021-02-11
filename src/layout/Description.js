import React from 'react';
import Title from '../components/Title';

const pointsArray = [
  'kompaktowy militarny wygląd',
  'szybkie serwisowanie bez użycia narzędzi',
  ' aluminiowy chwyt i body',
  '  wewnętrzny system gazowy "inline bolt system"',
  '  modułowa konstrukcja',
  '  stałe przyrządy celownicze',
  '  Zestaw zawiera magazynek grawitacyjny oraz barrel bag (osłona lufy)',
];

const points = pointsArray.map((name, index) => (
  <li key={index} className='text description__text'>
    {name}
  </li>
));

const Description = () => {
  return (
    <div className='description'>
      <Title text=' marker firmy tipmann' />

      <div className='description__content'>
        <p className='text description__text'>
          {' '}
          stworzony z myślą o młodszych graczach, poprzez zmiejszenie kalubru do
          50Cal.
        </p>
        <p className='text description__text'>
          {' '}
          FT-50 Lite wygladem przypomina marker FT-12 , jednak rózni się on
          trochę od swojego pierwowzoru.
        </p>
        <p className='text description__text'>
          {' '}
          Marker jest trochę krótszy, korpus ma bardziej agresywny charakter,
          średnica zewnętrzna oraz wewnętrzna lufy jest mniejsza oraz średnica
          otworu podającego kulki w magazynku grawitacyjnym jest dostosowana do
          kalubru 50Cal.
        </p>
      </div>

      <ul className='description__points'>{points}</ul>

      <h3 className='description__title'>nasi klienci pytali o:</h3>

      <div className='description__faq'></div>
      <h3 className='description__title'>nie znalazłeś odpowiedzi?</h3>
    </div>
  );
};

export default Description;
