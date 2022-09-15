import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <About/>
      <HowItWorks/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
