import React from 'react';
import './Footer.css';

import Logo from '../Logo/Logo';
import phone from '../../images/icons/phone.png';
import email from '../../images/icons/email.png';
import skype from '../../images/icons/skype.png';
import geo from '../../images/icons/geo.png';
import youtube from '../../images/icons/youtube.png';
import linkedin from '../../images/icons/linkedin.png';
import google from '../../images/icons/google.png';
import facebook from '../../images/icons/facebook.png';
import twitter from '../../images/icons/twitter.png';
import upArrow from '../../images/icons/up-arrow.png';

export default function Footer() {
   return (
      <footer className="footer" id="contacts">
         <div className="footer_content content_wrapper">
            <div className="footer_contacts-wrapper">
               <section className="footer_contacts">
                  <h3 className="footer_contacts-title footer-title">
                     Свяжитесь с нами
                  </h3>
                  <ul className="footer_contacts-list">
                     <li className="footer_contacts-item">
                        <img className="footer_contacts-icon" src={phone} alt=""/>
                        <p className="footer_contacts-text">
                           8 (800) 000 00 00
                        </p>
                     </li>
                     <li className="footer_contacts-item">
                        <img className="footer_contacts-icon" src={email} alt=""/>
                        <p className="footer_contacts-text">inbox@mail.ru</p>
                     </li>
                     <li className="footer_contacts-item">
                        <img className="footer_contacts-icon" src={skype} alt=""/>
                        <p className="footer_contacts-text">tu.train.tickets</p>
                     </li>
                     <li className="footer_contacts-item">
                        <img className="footer_contacts-icon" src={geo} alt=""/>
                        <p className="footer_contacts-text">
                           г. Москва
                           <br />
                           ул. Московская 27-35
                           <br />
                           555 555
                        </p>
                     </li>
                  </ul>
               </section>
               <section className="footer_subscribe">
                  <h3 className="footer_subscribe-title footer-title">
                     Подписка
                  </h3>
                  <form className="footer_form">
                     <label
                        className="footer_form-label"
                        htmlFor="subscription"
                     >
                        Будьте в курсе событий
                        <div className="input-wrapper">
                           <input
                              className="footer_form-input"
                              type="email"
                              id="subscription"
                              placeholder="e-mail"
                           />
                           <button
                              className="footer_form-button"
                              id="button"
                              type="button"
                           >
                              Отправить
                           </button>
                        </div>
                     </label>
                  </form>
                  <h3 className="footer_subscribe-title footer-title second-title ">
                     Подписывайтесь на нас
                  </h3>
                  <div className="footer_subscribe-icons">
                     <a href="#/" className="footer_subscribe-link">
                        <img src={youtube} alt=""/>
                     </a>
                     <a href="#/" className="footer_subscribe-link">
                        <img src={linkedin} alt=""/>
                     </a>
                     <a href="#/" className="footer_subscribe-link">
                        <img src={google} alt=""/>
                     </a>
                     <a href="#/" className="footer_subscribe-link">
                        <img src={facebook} alt=""/>
                     </a>
                     <a href="#/" className="footer_subscribe-link">
                        <img src={twitter} alt=""/>
                     </a>
                  </div>
               </section>
            </div>
         </div>
         <div className='line'/>
         <div className='footer__bottom-wrapper'>
            <Logo/>
            <span><img src={upArrow} alt=""/></span>
            <span className='footer__bottom-wrapper-text'>2018 WEB</span>
         </div>
      </footer>
   );
}
