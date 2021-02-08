import React, { useState } from 'react';
import Header from './layout/Header';
import { AppContext, defaultObject } from './AppContext';

const App = () => {
  //hooks

  const [currentLanguage, setCurrentLanguage] = useState(
    defaultObject.currentLanguage
  );

  const handleLanguage = (language) => {
    setCurrentLanguage(language);

    console.log(language);
  };

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          currentLanguage: currentLanguage,
          handleLanguage: handleLanguage,
        }}
      >
        <Header />
      </AppContext.Provider>
    </div>
  );
};

export default App;
