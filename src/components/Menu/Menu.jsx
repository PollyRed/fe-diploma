import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <ul className='menu'>
      <li className='menu__item'>О нас</li>
      <li className='menu__item'>Как это работает</li>
      <li className='menu__item'>Отзывы</li>
      <li className='menu__item'>Контакты</li>
    </ul>
  )
}

export default Menu;
