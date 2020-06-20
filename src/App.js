import React from 'react';
// import StateFull from './components/StateFull.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';


function App() {
  return (

    <React.Fragment>

      <Header />
      <div className="container-fluid">
        <Main />
      </div>
      <Footer />
    </React.Fragment>

  );

}

export default App;