import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Coach.css';
import rub from '../../../images/tickets/tickets-rub.svg';
import LuxClass from '../classes/LuxClass';
import KupeClass from '../classes/KupeClass';
import PlatzcartClass from '../classes/PlatzcartClass';
import SeatsClass from '../classes/SeatsClass';
import PriceFormat from '../../PriceFormat/PriceFormat';
import Service from './Service';

export default function Coach({ coach, seatsList, typeTicket }) {

   return (
      <div className="coach">
         <div className="coach-info">
            <div className="coach-info-header">
               <p className="coach-number">1</p>
               <p className="coach-title">вагон</p>
            </div>
            <div className="coach-info-card coach-info-card--seats">
               <h5 className="coach-info-title">
                  Места{' '}
                  <span className="coach-info-count">
                     10
                  </span>
               </h5>


                     <p className="coach-info-text">
                        Верхние{' '}
                        <strong>
                           10
                        </strong>
                     </p>
                     <p className="coach-info-text">
                        Нижние{' '}
                        <strong>
                           20
                        </strong>
                     </p>



                  <p className="coach-info-text">
                     Боковые{' '}
                     <strong>
                        10
                     </strong>
                  </p>

            </div>
            <div className="coach-info-card coach-info-card--price">
               <h5 className="coach-info-title">Стоимость</h5>

                  <p className="coach-info-text">
                     <PriceFormat title="coach-info" value={coach.top_price} />
                     <img
                        className="coach-ticket-сurrency"
                        src={rub}
                        alt="руб."
                     />
                  </p>

               <p className="coach-info-text">
                  <PriceFormat title="coach-info" value={coach.bottom_price} />
                  <img className="coach-ticket-сurrency" src={rub} alt="руб." />
               </p>

                  <p className="coach-info-text">
                     <PriceFormat title="coach-info" value={coach.side_price} />
                     <img
                        className="coach-ticket-сurrency"
                        src={rub}
                        alt="руб."
                     />
                  </p>

            </div>

            <div className="coach-info-card coach-info-card--services">
               <h5 className="coach-info-title">Обслуживание ФПК</h5>
               <div className="coach-services">
                  {coach.have_air_conditioning && (
                     <Service service="air" id="1" type={typeTicket} />
                  )}
                  {coach.have_wifi && (
                     <Service service="wifi" id="1" type={typeTicket} />
                  )}
                  {coach.linens_price !== 0 && (
                     <Service
                        service="linens"
                        id="1"
                        disabled={coach.is_linens_included}
                        type={typeTicket}
                     />
                  )}
                  <Service service="food" id="1" type={typeTicket} />
               </div>
            </div>
         </div>
         <div className="coach-inner">
            <div className="coach-demand">
               5 человек
               выбирают места в этом поезде
            </div>

               <LuxClass
                  id="1"
                  seatsList={seatsList}
                  typeTicket={typeTicket}
               />
               <KupeClass
                  id="1"
                  seatsList={seatsList}
                  typeTicket={typeTicket}
               />
               <PlatzcartClass
                  id="1"
                  seatsList={seatsList}
                  typeTicket={typeTicket}
               />
               <SeatsClass
                  id="1"
                  seatsList={seatsList}
                  typeTicket={typeTicket}
               />
         </div>
         <div className="coach-total">

               <p className="coach-total-text">
                  <PriceFormat
                     title="coach-total"
                     value="1000"
                  />
                  <img className="coach-total-сurrency" src={rub} alt="руб." />
               </p>

         </div>
      </div>
   );
}

Coach.propTypes = {
   coach: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
   ).isRequired,
   seatsList: PropTypes.string.isRequired,
   typeTicket: PropTypes.string.isRequired,
};
