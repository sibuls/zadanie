import { createContext } from 'react';

export const defaultObject = {
  currentLanguage: 'polish',
  summaryCounter: 0,
  summaryOldPrice: 1499,
  summaryNewPrice: 1278,
  basketCounter: 0,
  basketToPay: 0,
  stock: 14,
  handleLanguage: () => {},
  handleSummaryCounter: () => {},
  handleAddToBasket: () => {},
};

export const AppContext = createContext(defaultObject);
