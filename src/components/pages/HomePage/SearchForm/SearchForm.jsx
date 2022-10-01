import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router';
import './SearchForm.css';

import InputDatePicker from "../../../SearchFormInputs/InputDatePicker";
import DirectionInputs from "../../../SearchFormInputs/DirectionInputs";
import {fetchRoutes} from "../../../../slices/routesSlice";

function SearchForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchRoutes());
        navigate('/order/tickets/train');
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='search-form'>
            <div className='search-form__text'>Направление</div>
            <DirectionInputs/>
            <div className='search-form__text'>Дата</div>
            <InputDatePicker/>
            <button
                className='search-form__button'
                type='button'
                onClick={onSubmit}
            >
                <div className='search-form__button-text'>
                    <b>найти билеты</b>
                </div>
            </button>
        </div>
    )
}

export default SearchForm;
