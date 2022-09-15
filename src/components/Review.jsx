import React from 'react';
import PropTypes from 'prop-types';

function Review(props) {
  const {image, name, text} = props;
  return (
    <div className='review'>
      <img className='review__image' src={image} alt=""/>
      <div>
        <div className='review__name'><b>{name}</b></div>
        <div className='review__text'><i>“{text}”</i></div>
      </div>
    </div>
  )
}

Review.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Review;
