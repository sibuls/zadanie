import React, { useState } from 'react';
import Header from './layout/Header';
import { AppContext, defaultObject } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './layout/Main';

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
    <Router>
      <div className='App'>
        <AppContext.Provider
          value={{
            currentLanguage: currentLanguage,
            handleLanguage: handleLanguage,
          }}
        >
          {' '}
          <Header />
          <Main />
        </AppContext.Provider>
      </div>
    </Router>
  );
};

export default App;
