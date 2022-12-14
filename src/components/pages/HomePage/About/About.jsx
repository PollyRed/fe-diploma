import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className='about__title'>О нас</div>
      <div className='about__text'>
        <p>Мы рады видеть Вас! Мы работаем для Вас с 2003  года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
        <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
        <p><b>Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br/>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</b></p>
      </div>
    </section>
  );
}

export default About;
