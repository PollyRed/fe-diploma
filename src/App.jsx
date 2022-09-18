import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Reviews from './components/Reviews/Reviews';

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
