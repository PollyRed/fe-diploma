import React, { useEffect, useState } from 'react';

import Ticket from './seats/Ticket';
import './Seats.css';

export default function Seats() {
      return (
      <section className="seats order_options">
         <h3 className="title seats_title">Выбор мест</h3>
            <Ticket type="departure" className="ticket_header-train" />
         <div className="seats_buttons">
            <button
               type="button"
               className="button seats_button"
            >
               Далее
            </button>
         </div>
      </section>
   );
}
