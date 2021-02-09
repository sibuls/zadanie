import React, { useState } from 'react';
import Header from './layout/Header';
import { AppContext, defaultObject } from './AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

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
        </AppContext.Provider>
      </div>
    </Router>
  );
};

export default App;
