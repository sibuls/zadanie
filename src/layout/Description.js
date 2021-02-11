import React from 'react';
import Title from '../components/Title';
import Faq from '../components/Faq';
// import ask from '../images/main/ask.png';

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

      <div className='description__faq'>
        <Faq
          question1={'Czy ten pistolet jest idealny do gry w paintballa?'}
          question2={'Czy ten model posiada mechanizm spustowy ?'}
          question3={'Jakie dobrać naboje do tego sprzętu?'}
          question4={'Nie moge znależć instrukcji, czy mi ją doślecie?'}
          answer1={
            'Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne. Wystrzeliwany z nich śrut ma również większe możliwości przebijania celu'
          }
        />
      </div>

      <div className='description__question'>
        {' '}
        <h3 className='description__title'>nie znalazłeś odpowiedzi?</h3>
        <div className='description__ask'>
          {' '}
          <p className=' white '>zadaj swoje pytanie</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
