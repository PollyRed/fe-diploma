import React from 'react';
import HowItWorksElement from './HowItWorksElement';
import Directions from '../images/icons/a-lot-of-directions_icon.png';
import Orders from '../images/icons/comfortable-order_icon.png';
import Office from '../images/icons/out-of-office_icon.png';

function HowItWorks() {
  return (
    <div className='how-it-works'>
      <div className='how-it-works__title'>как это работает</div>
      <button className='how-it-works__learn-more' type='button'>Узнать больше</button>
      <ul className='how-it-works__elements'>
        <li><HowItWorksElement image={Orders} text='Удобный заказ на сайте'/></li>
        <li><HowItWorksElement image={Office} text='Нет необходимости ехать в офис'/></li>
        <li><HowItWorksElement image={Directions} text='Огромный выбор направлений'/></li>
      </ul>
    </div>
  );
}

export default HowItWorks;
