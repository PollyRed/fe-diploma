import React from 'react';
import Review from './Review';
import FirstPhoto from '../images/photos/review-first_photo.png';
import SecondPhoto from '../images/photos/review-second_photo.png';

function Reviews() {
  return (
    <div>
      <div className='reviews__title'>отзывы</div>
      <ul className='reviews'>
        <li><Review image={FirstPhoto} name="Екатерина Вальнова" text="Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."/></li>
        <li><Review image={SecondPhoto} name="Евгений Стрыкало" text="СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."/></li>
      </ul>
    </div>
  );
}

export default Reviews;
