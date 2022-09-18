import React from 'react';
import './SearchForm.css';
import circleArrows from '../../images/icons/circle-arrows.png';

function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__text'>Направление</div>
      <div>
        <input className='search-form__direction-input' placeholder='Откуда' type="text"/>
        <span className='search-form__arrows-wrapper'><img className='search-form__arrows' src={circleArrows} alt=""/></span>
        <input className='search-form__direction-input' placeholder='Куда' type="text"/>
      </div>
      <div className='search-form__text'>Дата</div>
      <div>
        <input className='search-form__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
        <span className='search-form__arrows-wrapper'><img className='search-form__arrows' src={circleArrows} alt=""/></span>
        <input className='search-form__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
      </div>
      <button className='search-form__button' type='button'>
        <div className='search-form__button-text'><b>найти билеты</b></div>
      </button>
    </div>
  )
}

export default SearchForm;
