import React, { useContext, Component, useState } from 'react';
import { AppContext } from '../AppContext';

import Select from 'react-select';
import gunBlack from '../images/main/gun_black.png';
import gunGreen from '../images/main/gun_green.png';
import gunPurple from '../images/main/gun_purple.png';

const MyComponent = () => <Select options={options} />;

const Shopping = () => {
  // hooks

  const {
    summaryCounter,
    summaryOldPrice,
    summaryNewPrice,
    stock,
    handleSummaryCounter,
    handleAddToBasket,
  } = useContext(AppContext);

  const shoppingImagesArray = [
    gunBlack,
    gunGreen,
    gunPurple,
    gunBlack,
    gunGreen,
    gunPurple,
  ];

  const barrel = [
    { value: '120', label: '120 cm' },
    { value: '140', label: '140 cm' },
    { value: '160', label: '160 cm' },
    { value: '172', label: '172 cm' },
    { value: '185', label: '185 cm' },
  ];

  const caliber = [
    { value: '55nu', label: '55nu' },
    { value: '65nu', label: '65nu' },
    { value: '75nu', label: '75nu' },
  ];

  const shoppingImages = shoppingImagesArray.map((each, index) => (
    <div key={index} className='shopping__pistol'>
      <img className=' ' src={each} alt='sample' />
    </div>
  ));

  const producent = (
    <div className='producent'>
      <p className='producent__paragraph'>
        PRODUCENT: <span className='producent__name'>Dye</span> kod produktu:
        <span className='producent__code'> 6578758769878</span>
      </p>
    </div>
  );

  const dropdown = (
    <div className='shopping__dropdown'>
      <div className='shopping__barrel'>
        <p> długość lufy:</p>
        <Select
          defaultValue={{ label: '120 cm', value: '120' }}
          className='shopping__select'
          options={barrel}
        />
      </div>
      <div className='shopping__caliber'>
        <p>kaliber:</p>{' '}
        <Select
          defaultValue={{ label: '55nu', value: '55nu' }}
          className='shopping__select'
          options={caliber}
        />
      </div>
    </div>
  );

  const warehouse = (
    <div className='warehouse'>
      <div className='warehouse__green'>
        {' '}
        <i class='fas fa-check '></i>
      </div>

      <div className='warehouse__stock'>
        {' '}
        <p>
          Dostępny na magazynie <span>( {stock} szt.)</span>
        </p>
        <p className='bold'>Wysyłka dzisiaj</p>
      </div>
      <div className='warehouse__time red '>
        <p>Sprawdź czasy i koszty wysyłki </p>
      </div>
    </div>
  );

  return (
    <div className='shopping'>
      <h1 className='shopping__title title'>
        MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)
      </h1>
      {producent}
      <p className='text'>Kolor:</p>
      <div className='shopping__gallery'> {shoppingImages}</div>
      {dropdown}
      {warehouse}
      <div className='summary'>
        <div className='summary__price'>
          <p className='summary__price-old'>
            {summaryOldPrice.toLocaleString('fr-FR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            zł
          </p>
          <p className='summary__price-new'>
            {summaryNewPrice.toLocaleString('fr-FR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            zł
          </p>
        </div>{' '}
        <div className='summary__counter'>
          {' '}
          <span
            className='summary__btn'
            onClick={
              summaryCounter > 0
                ? () => handleSummaryCounter(summaryCounter - 1)
                : null
            }
          >
            -
          </span>{' '}
          {summaryCounter}{' '}
          <span
            className='summary__btn'
            onClick={
              summaryCounter <= stock - 1
                ? () => handleSummaryCounter(summaryCounter + 1)
                : null
            }
          >
            +
          </span>
        </div>
        <div className='summary__add white' onClick={handleAddToBasket}>
          dodaj do koszyka
        </div>
      </div>
      <div className='compare'>
        {' '}
        <div className='compare__logo'>
          {' '}
          <i class='fas fa-undo compare__ico compare__ico--undo'></i>
          <i class='fas fa-dollar-sign compare__ico compare__ico--dollar'></i>
        </div>
        <div className='compare__description'>
          <p className='text bold'>Znalazłeś ten produkt taniej? </p>
          <p className='text red bold'>Wynegocjuj cenę </p>
        </div>
        <div className='compare__action red bold'>dodaj do porównania</div>
      </div>
      <div className='box'>
        <div className='box__shipping box__container'>
          <i class='fas fa-shipping-fast ico-normal'></i>

          <div className='box__content'>
            <p className='text bold'>Darmowa dostawa </p>
            <p className='text-side'>dla zamówień powyżej 600 zł</p>
          </div>
        </div>

        <div className='box__return box__container'>
          <i class='fas fa-undo ico-normal'></i>

          <div className='box__content'>
            <p className='text bold'>zwrot towaru</p>
            <p className='text-side'>do 14 dni od daty zakupu</p>
          </div>
        </div>

        <div className='box__installment box__container'>
          <i class='fas fa-percent ico-normal'></i>
          <div className='box__content'>
            <p className='text bold'>zakupy na raty</p>
            <p className='red'>oblicz ratę >></p>
          </div>
        </div>

        <div className='box__warranty box__container'>
          <i class='fas fa-award ico-normal'></i>
          <div className='box__content'>
            {' '}
            <p className='text bold'>gwarancja 12 miesięcy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
