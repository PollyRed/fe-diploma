import React from 'react';

import About from '../About/About';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import HowItWorks from '../HowItWorks/HowItWorks';
import Reviews from '../Reviews/Reviews';

function MainPage() {
    return (
        <div>
          <HomePage/>
          <About/>
          <HowItWorks/>
          <Reviews/>
          <Footer/>
        </div>
    );
}

export default MainPage;
