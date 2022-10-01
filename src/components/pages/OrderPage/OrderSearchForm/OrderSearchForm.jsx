import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

import './OrderSearchForm.css';
import DirectionInputs from "../../../SearchFormInputs/DirectionInputs";
import InputDatePicker from "../../../SearchFormInputs/InputDatePicker";
import {fetchRoutes} from "../../../../slices/routesSlice";

function OrderSearchForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchRoutes());
        navigate('/order/tickets/train');
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='order-search-form'>
            <div className='order-search-form__inputs'>
                <div className='order-search-form__input'>
                    <div className='order-search-form__text'>Направление</div>
                    <DirectionInputs/>
                </div>
                <div className='order-search-form__input'>
                    <div className='order-search-form__text'>Дата</div>
                    <InputDatePicker/>
                </div>
            </div>
            <button
                className='order-search-form__button'
                type='button'
                onClick={onSubmit}
            >
                <div className='order-search-form__button-text'><b>найти билеты</b></div>
            </button>
        </div>
    )
}

export default OrderSearchForm;
