import React from 'react';
import PropTypes from 'prop-types';


export default function Service({ service, type, id, disabled }) {
   return (
      <button
         type="button"
         className='service air-service service--active air-service--active'
      />
   );
}

Service.defaultProps = {
   disabled: false,
};

Service.propTypes = {
   service: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
   disabled: PropTypes.bool,
};
