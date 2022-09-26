import React from 'react';
import Review from './Review';
import './Reviews.css';
import FirstPhoto from '../../images/photos/review-first_photo.png';
import SecondPhoto from '../../images/photos/review-second_photo.png';
import EllipseOn from '../../images/icons/ellipse-on.png';
import EllipseOff from '../../images/icons/ellipse-off.png';

function Reviews() {
  return (
    <section id="reviews">
      <div className='reviews__title'>отзывы</div>
      <div className='reviews'>
        <Review image={FirstPhoto} name="Екатерина Вальнова" text="Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."/>
        <Review image={SecondPhoto} name="Евгений Стрыкало" text="СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."/>
      </div>
      <div className='reviews__selector'>
        <img className='reviews__selector-img' src={EllipseOn} alt=""/>
        <img className='reviews__selector-img' src={EllipseOff} alt=""/>
        <img className='reviews__selector-img' src={EllipseOff} alt=""/>
        <img className='reviews__selector-img' src={EllipseOff} alt=""/>
        <img className='reviews__selector-img' src={EllipseOff} alt=""/>
      </div>
    </section>
  );
}

export default Reviews;
