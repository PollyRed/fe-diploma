import React from 'react';
import './OrderSearchForm.css';
import circleArrows from '../../images/icons/circle-arrows.png';

function SearchForm() {
    return (
        <div className='order-search-form'>
            <div className='order-search-form__inputs'>
                <div className='order-search-form__input'>
                    <div className='order-search-form__text'>Направление</div>
                    <input className='order-search-form__direction-input' placeholder='Откуда' type="text"/>
                    <span className='order-search-form__arrows-wrapper'><img className='search-form__arrows' src={circleArrows} alt=""/></span>
                    <input className='order-search-form__direction-input' placeholder='Куда' type="text"/>
                </div>

                <div className='order-search-form__input'>
                    <div className='order-search-form__text'>Дата</div>
                    <span className='order-search-form__date-inputs'>
                        <input className='order-search-form__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
                        <span className='order-search-form__arrows-wrapper'><img className='search-form__arrows' src={circleArrows} alt=""/></span>
                        <input className='order-search-form__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
                    </span>
                </div>
            </div>
            <button className='order-search-form__button' type='button'>
                <div className='order-search-form__button-text'><b>найти билеты</b></div>
            </button>
        </div>
    )
}

export default SearchForm;
