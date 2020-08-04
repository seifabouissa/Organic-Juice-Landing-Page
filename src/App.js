import React from 'react';
import favicon from './imgs/favicon-96x96.png';
import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import JuiceLeaves from './components/JuiceLeaves';
import Overlay from './components/Overlay';

function App() {
  return (
    <>
    <link rel="shortcut icon" type="image/png" href={favicon} />
    <div className="App">
      <Navigation/>
      <Header/>
      <JuiceLeaves/>
      <Overlay/>
    </div>
    </>
  );
}

export default App;
