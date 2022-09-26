import React, { useEffect, useState } from 'react';
import './PayForm.css';

export default function PayForm() {
   return (
      <section className="payForm order_payForm">
         <form className="payForm_form">
            <h4 className="payForm_title">Персональные данные</h4>
            <div className="payForm_wrapper">
               <div className="payForm-controls payForm-controls--name">
                  <label className="payForm_label" htmlFor="surname">
                     Фамилия
                     <input
                        className="payForm_field"
                        id="surname"
                        name="surname"
                        type="text"
                        value="Мартынюк"
                     />
                  </label>
                  <label className="payForm_label" htmlFor="name">
                     Имя
                     <input
                        className="payForm_field"
                        id="name"
                        name="name"
                        type="text"
                        value="Ирина"
                     />
                  </label>
                  <label className="payForm_label" htmlFor="last-name">
                     Отчество
                     <input
                        className="payForm_field"
                        id="last-name"
                        name="lastname"
                        type="text"
                        value="Эдуардовна"
                     />
                  </label>
               </div>
               <div className="payForm-controls payForm-controls-contacts">
                  <label
                     className="payForm_label payForm_label-contact"
                     htmlFor="phone"
                  >
                     Контактный телефон
                     <input
                        className="payForm_field payForm_field-contact"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 ___ ___ __ __"
                        value="+7 800 555 35 35"
                     />
                  </label>
                  <label
                     className="payForm_label payForm_label-contact"
                     htmlFor="email"
                  >
                     E-mail
                     <input
                        className="payForm_field payForm_field-contact"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="inbox@gmail.ru"
                        value="mail@mail.ru"
                     />
                  </label>
               </div>
            </div>
            <section className="payForm_payment">
               <h4 className="payForm_title payForm_title-repeat">
                  Способ оплаты
               </h4>
               <div className="payForm_controls-group">
                  <input
                     className="payForm_field-control"
                     type="radio"
                     name="payment"
                     id="online"
                     checked="true"
                  />

                  <label
                     className="payForm_label payForm_label-radio"
                     htmlFor="online"
                  >
                     Онлайн
                  </label>
                  <ul className="payForm_paylist">
                     <li className="payForm_pay-item">
                        Банковской
                        <br />
                        картой
                     </li>
                     <li className="payForm_pay-item">PayPal</li>
                     <li className="payForm_pay-item">Visa QIWI Wallet</li>
                  </ul>
               </div>
               <div className="payForm_controls-group">
                  <input
                     className="payForm_field-control"
                     type="radio"
                     name="payment"
                     id="cash"
                     checked="true"
                  />

                  <label
                     className="payForm_label payForm_label-radio"
                     htmlFor="cash"
                  >
                     Наличными
                  </label>
               </div>
            </section>
         </form>

         <div className="payForm_buttons">
            <button
               type="button"
               className="button payForm_button"
            >
               Купить билеты
            </button>
         </div>
      </section>
   );
}
