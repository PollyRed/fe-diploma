import React from 'react';
import PropTypes from 'prop-types';

export default function Seat({
   id,
   number,
   type,
   left,
   available,
   typeTicket,
}) {

   return (
      <button
         type="button"
         className='coach-seat coach-seat--top coach-seat--active'
      >
         <p className="coach-seat-number" id={number}>
            {number}
         </p>
      </button>
   );
}

Seat.propTypes = {
   id: PropTypes.number.isRequired,
   number: PropTypes.number.isRequired,
   type: PropTypes.string.isRequired,
   left: PropTypes.string.isRequired,
   available: PropTypes.bool.isRequired,
   typeTicket: PropTypes.string.isRequired,
};
