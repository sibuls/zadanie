import React, { useState } from 'react';
import Header from './layout/Header';
import { AppContext, defaultObject } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './layout/Main';

import AutoPlay from './layout/AutoPlay';
import Description from './layout/Description';
import Aside from './layout/Aside';
import Tips from './layout/Tips';
import Footer from './layout/Footer';
import SideBar from './components/Sidebar';

const App = () => {
  //hooks

  const [currentLanguage, setCurrentLanguage] = useState(
    defaultObject.currentLanguage
  );

  const [summaryCounter, setSummaryCounter] = useState(
    defaultObject.summaryCounter
  );

  const [summaryOldPrice, setSumaryOldPrice] = useState(
    defaultObject.summaryOldPrice
  );
  const [summaryNewPrice, setSummaryNewPrice] = useState(
    defaultObject.summaryNewPrice
  );

  const [basketCounter, setBasketCounter] = useState(
    defaultObject.basketCounter
  );

  const [basketToPay, setBasketToPay] = useState(defaultObject.basketToPay);

  const [stock, setStock] = useState(defaultObject.stock);

  const handleLanguage = (language) => {
    setCurrentLanguage(language);

    console.log(language);
  };

  const handleSummaryCounter = (counter) => {
    setSummaryCounter(counter);
  };

  const handleAddToBasket = () => {
    setBasketCounter(summaryCounter + basketCounter);
    setBasketToPay((summaryCounter + basketCounter) * summaryNewPrice);
    setStock(stock - summaryCounter);
    setSummaryCounter(0);
  };

  return (
    <Router>
      <div className='app'>
        <AppContext.Provider
          value={{
            currentLanguage: currentLanguage,
            summaryCounter: summaryCounter,
            summaryOldPrice: summaryOldPrice,
            summaryNewPrice: summaryNewPrice,
            basketCounter: basketCounter,
            basketToPay: basketToPay,
            stock: stock,
            handleLanguage: handleLanguage,
            handleSummaryCounter: handleSummaryCounter,
            handleAddToBasket: handleAddToBasket,
          }}
        >
          {' '}
          <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
          <Header />
          <Main />
          <AutoPlay />{' '}
          <div className='wrapper'>
            <Description />
            <Aside />
          </div>
          <Tips />
          <Footer />
        </AppContext.Provider>
      </div>
    </Router>
  );
};

export default App;
