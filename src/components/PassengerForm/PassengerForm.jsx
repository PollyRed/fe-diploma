import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './PassengerForm.css';

export default function PassengerForm({number, type}) {

    return (
        <div className="passengerForm">
            <div className='passenger_header active-form'>
                <h4 className="title title--small passenger_title">
               <span
                   className='passenger_toggle hide'
               />
                    Пассажир {number}
                </h4>
                <button type="button" className="passenger_delete-button"/>
            </div>

            <div
                className='passengerForm_form passengerForm--active'
            >
                <form className="passengerForm-section">
                    <select
                        className="passengerForm-field passengerForm-list"
                        defaultValue={type}
                        disabled
                    >
                        <option className="passengerForm-item" value="adult">
                            Взрослый
                        </option>
                        <option className="passengerForm-item" value="child">
                            Детский
                        </option>
                    </select>
                    <div className="passengerForm-controls">
                        <label
                            className="passengerForm-label"
                            htmlFor={`surname${number}`}
                        >
                            Фамилия
                            <input
                                className="passengerForm-field passengerForm-field--name"
                                id={`surname${number}`}
                                type="text"
                                name="surname"
                                value="Мартынюк"
                            />
                        </label>
                        <label
                            className="passengerForm-label"
                            htmlFor={`name${number}`}
                        >
                            Имя
                            <input
                                className="passengerForm-field passengerForm-field--name"
                                id={`name${number}`}
                                type="text"
                                name="name"
                                value="Ирина"
                            />
                        </label>
                        <label
                            className="passengerForm-label"
                            htmlFor={`lastname${number}`}
                        >
                            Отчество
                            <input
                                className="passengerForm-field passengerForm-field--name"
                                id={`lastname${number}`}
                                type="text"
                                name="lastname"
                                value="Эдуардовна"
                            />
                        </label>
                    </div>
                </form>

                <div className="passengerForm-controls passengerForm-section">
                    <div className="passengerForm-radio-group">
                        <p className="passengerForm-label">Пол</p>
                        <div className="passengerForm_radio-controls">
                            <input
                                className="passengerForm_radio-field"
                                id={`male${number}`}
                                data-id="male"
                                name={`sex${number}`}
                                type="radio"
                                checked={'female' === 'male'}
                            />
                            <label
                                className="passengerForm_radio-label passengerForm_radio-label--male"
                                htmlFor={`male${number}`}
                            >
                                М
                            </label>
                            <input
                                className="passengerForm_radio-field"
                                id={`female${number}`}
                                data-id="female"
                                name={`sex${number}`}
                                type="radio"
                                checked="female"
                            />
                            <label
                                className="passengerForm_radio-label passengerForm_radio-label--female"
                                htmlFor={`female${number}`}
                            >
                                Ж
                            </label>
                        </div>
                    </div>

                    <label
                        className="passengerForm-label"
                        htmlFor={`birth${number}`}
                    >
                        Дата рождения
                        <input
                            className="passengerForm-field"
                            id={`birth${number}`}
                            type="text"
                            placeholder="ДД/ММ/ГГ"
                            name="birth"
                            value="01/01/1970"
                        />
                    </label>
                </div>

                <div className="passengerForm-controls passengerForm-section checkbox-control">
                    <input className="passengerForm_checkbox" type="checkbox"/>
                    <p className="passengerForm_checkbox-label">
                        ограниченная подвижность
                    </p>
                </div>

                <div className="passengerForm-section">
                    <div className="passengerForm_document">
                        <label className="passengerForm-label">
                            Тип документа
                            <select
                                className='passengerForm-field passengerForm-list passengerForm-list--passport'
                                value="passport"
                            >
                                <option className="passengerForm-item" value="passport">
                                    Паспорт РФ
                                </option>
                                {type !== 'adult' ? (
                                    <option
                                        className="passengerForm-item"
                                        value="certificate"
                                    >
                                        Свидетельство о рождении
                                    </option>
                                ) : (
                                    ''
                                )}
                            </select>
                        </label>
                        (
                            <label
                                className="passengerForm-label"
                                htmlFor={`series${number}`}
                            >
                                Серия
                                <input
                                    className="passengerForm-field passengerForm-field--document"
                                    id={`series${number}`}
                                    type="text"
                                    placeholder="_ _ _ _"
                                    name="series"
                                    value="1234"
                                />
                            </label>
                        )
                        <label
                            className="passengerForm-label"
                            htmlFor={`document${number}`}
                        >
                            Номер
                            <input
                                className="passengerForm-field passengerForm-field--document"
                                id={`document${number}`}
                                type="text"
                                placeholder='_ _ _ _ _ _'

                                name="document"
                                value='passport'
                            />
                        </label>
                    </div>
                </div>
                <div
                    className='passengerForm-footer passengerForm-section '
                >
                    (
                        <div className="passengerForm-massage">
                            <span className="massage-done-img"/>
                            <span className="massage-done">Готово</span>
                        </div>
                    )
                </div>
            </div>
        </div>
    );
}

PassengerForm.propTypes = {
    type: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};
