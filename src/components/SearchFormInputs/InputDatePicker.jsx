import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-datepicker";

import ru from 'date-fns/locale/ru';
import './SearchFormInputs.css';
import 'react-datepicker/dist/react-datepicker.css';
import {searchFieldChange} from "../../slices/searchSlice";

function InputDatePicker() {
    const dispatch = useDispatch();
    const dateStart = useSelector((state) => state.search.date_start);
    const dateEnd = useSelector((state) => state.search.date_end);
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    useEffect(() => {
        if (dateStart) {
            setStart(new Date(dateStart));
        }
    }, [dateStart]);

    useEffect(() => {
        if (dateEnd) {
            setEnd(new Date(dateEnd));
        }
    }, [dateEnd]);

    const handleChange = (name, date) => {
        const str = date.toLocaleDateString();
        const format = `${str.slice(-4)}-${str.slice(3, 5)}-${str.slice(0, 2)}`;
        dispatch(
            searchFieldChange({
                name,
                value: format,
            })
        );
    };

    return (
        <div className='search-form-inputs'>
            <DatePicker
                locale={ru}
                placeholderText='ДД/ММ/ГГ'
                dateFormat="dd/MM/yy"
                selected={start}
                minDate={new Date()}
                selectsStart
                onChange={(date) => handleChange('date_start', date)}
                customInput={
                    <input
                        className='input-date-picker__date-input'
                        placeholder='ДД/ММ/ГГ'
                        type="text"
                    />
                }
            />
            <span className='search-form-inputs__space-wrapper'/>
            <DatePicker
                locale={ru}
                placeholderText='ДД/ММ/ГГ'
                dateFormat="dd/MM/yy"
                selected={end}
                minDate={start}
                selectsEnd
                onChange={(date) => handleChange('date_end', date)}
                customInput={
                    <input
                        className='input-date-picker__date-input'
                        placeholder='ДД/ММ/ГГ'
                        type="text"
                    />
                }
            />
        </div>
    );
}

export default InputDatePicker;
