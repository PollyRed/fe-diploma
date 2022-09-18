import React from 'react';
import HowItWorksElement from './HowItWorksElement';
import Directions from '../../images/icons/a-lot-of-directions_icon.png';
import Orders from '../../images/icons/comfortable-order_icon.png';
import Office from '../../images/icons/out-of-office_icon.png';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className='how-it-works'>
      <div className='how-it-works__title'>как это работает</div>
      <button className='how-it-works__learn-more' type='button'>Узнать больше</button>
      <div className='how-it-works__elements'>
        <HowItWorksElement image={Orders} text='Удобный заказ на сайте'/>
        <HowItWorksElement image={Office} text='Нет необходимости ехать в офис'/>
        <HowItWorksElement image={Directions} text='Огромный выбор направлений'/>
      </div>
    </div>
  );
}

export default HowItWorks;
