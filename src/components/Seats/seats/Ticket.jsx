import React from 'react';

import PropTypes from 'prop-types';
import { routeTo, routeBack } from '../../../images/svg';

import './Ticket.css';
import Train from '../../TrainCard/TrainCard';

export default function Ticket({ type }) {
   return (
      <div className="ticket">
         <div className="ticket_header ticket_header--route--there">
            <div
               className={`ticket_header-actions ${
                  type === 'departure' ? '' : 'routeBack'
               }`}
            >
               {type === 'departure' ? routeTo : routeBack}
               <button
                  type="button"
                  className="button ticket_header-button"
               >
                  Выбрать другой поезд
               </button>
            </div>
            <Train type={type} option="ticket_header-train" />
         </div>
         <section className="ticket_count">
            <h4 className="ticket_title ticket_count-title">
               Количество билетов
            </h4>
            <div className="ticket_count-wrapper">
               <div className="ticket_count-card ticket_count-card--adults">
                  <select
                     className="ticket_count-list"
                     name="adult"
                     value="10"
                  >
                     {[0, 1, 2, 3, 4].map((el) => (
                        <option
                           className="ticket_count-item"
                           value={el}
                           key={`adult${el}`}
                        >
                           Взрослых — {el}
                        </option>
                     ))}
                  </select>

                     <p className="ticket_count-text">
                        Можно добавить еще 5 пассажиров
                     </p>

               </div>
               <div className="ticket_count-card ticket_count-card--children">
                  <select
                     className="ticket_count-list"
                     name="child"
                     value="10"
                  >
                     {[0, 1, 2, 3].map((el) => (
                        <option
                           className="ticket_count-item"
                           value={el}
                           key={`child${el}`}
                        >
                           Детских — {el}
                        </option>
                     ))}
                  </select>
                     <p className="ticket_count-text count-child">
                        Можно добавить еще 5 детей до 10
                        лет.Свое место в вагоне, как у взрослых, но дешевле в
                        среднем на 50-65%
                     </p>

               </div>
               <div className="ticket_count-card">
                  <select
                     className="ticket_count-list"
                     name="baby"
                     value="5"
                  >
                     {[0, 1, 2, 3, 4].map((el) => (
                        <option
                           className="ticket_count-item"
                           value={el}
                           key={`baby${el}`}
                        >
                           Детских «без места» — {el}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </section>
         <section className="ticket_class">
            <h4 className="ticket_title ticket_class-title">Тип вагона</h4>

         </section>

      </div>
   );
}

Ticket.propTypes = {
   type: PropTypes.string.isRequired,
};
