import { createContext } from 'react';

export const defaultObject = {
  currentLanguage: 'polish',
  handleLanguage: () => {},
};

export const AppContext = createContext(defaultObject);
