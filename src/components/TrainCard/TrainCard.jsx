import React from 'react';
import './TrainCard.css';
import moment from 'moment';
import {useNavigate} from 'react-router';

import trainLogo from '../../images/tickets/train-logo.svg';
import trainLogoSmall from '../../images/tickets/train-logo-small.svg';
import clock from '../../images/tickets/train-clock.svg';
import rub from '../../images/tickets/tickets-rub.svg';

import {
    defaultRouteSvg,
    routeSvg,
    departureSvg,
    arrivalSvg,
    wifi,
    express,
    food,
} from '../../images/svg';

import PriceFormat from '../PriceFormat/PriceFormat';
import Duration from './Duration';

function TrainCard(route, type) {
    const navigate = useNavigate();
    const {option} = route;

    const handleClick = () => {
        if (option === 'verification') {
            navigate('/order/tickets/train');
            return;
        }

        navigate('/order/tickets/seats');
    };

    return (
        <div className="train-card">
            <div className="train_logo">
                <img
                    className="train_logo-icon"
                    src={
                        option === 'ticket_header-train' ? trainLogoSmall : trainLogo
                    }
                    alt="Train"
                />
                <div className="train_title">
                    <h4 className="train_name">116C</h4>
                    <p className="train_title-route train_title-route--default">
                        Адлер
                        {defaultRouteSvg}
                    </p>
                    <p className="train_title-route">
                        Москва
                        {routeSvg}
                    </p>
                    <p className="train_title-route ">Санкт-Петербург</p>
                </div>
            </div>

            <div className="train_routes">
                {type !== 'arrival' && (
                    <div className="route train_route">
                        <div className="route_info train_route-info">
                            <p className="route_time train_route-time">
                                00:10
                            </p>
                            <p className="route_city train_route-city">
                                Москва
                            </p>
                            <p className="route_station train_route-station">
                                Курский вокзал
                            </p>
                        </div>
                        <div className="route_duration train_route-duration">
                            {option !== 'ticket_header-train' && (
                                <p className="route_duration-time train_route-duration-time">
                                    9:42
                                </p>
                            )}
                            {departureSvg}
                        </div>
                        <div className="route_info train_route-info">
                            <p className="route_time train_route-time">
                                9:52
                            </p>
                            <p className="route_city train_route-city">
                                Санкт-Петербург
                            </p>
                            <p className="route_station train_route-station">
                                Ладожский вокзал
                            </p>
                        </div>
                    </div>
                )}
                {type !== 'departure' && (
                    <div className="route train_route train_route--back">
                        <div className="route_info train_route-info">
                            <p className="route_time train_route-time">
                                9:52
                            </p>
                            <p className="route_city train_route-city">
                                Санкт-Петербург
                            </p>
                            <p className="route_station train_route-station">
                                Ладожский вокзал
                            </p>
                        </div>
                        <div className="route_duration train_route-duration train_route-duration">
                            {option !== 'ticket_header-train' && (
                                <p className="route_duration-time train_route-duration-time">
                                    9:42
                                </p>
                            )}
                            {arrivalSvg}
                        </div>
                        <div className="route_info train_route-info">
                            <p className="route_time train_route-time">
                                00:10
                            </p>
                            <p className="route_city train_route-city">
                                Москва
                            </p>
                            <p className="route_station train_route-station">
                                Курский вокзал
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="train_info">
                {option !== 'ticket_header-train' && (
                    <>
                        <ul className="train_seats-list">

                            <li className="train_seats-item">
                                <p className="train_seats-type">Сидячий</p>
                                <p className="train_seats-count">
                                    2500
                                </p>
                                <span className="train_seats-price">
                              от
                              <PriceFormat
                                  title="train_seats-price"
                                  value={2500}
                              />{' '}
                                    <img
                                        className="train_seats-price-currency"
                                        src={rub}
                                        alt="rub"
                                    />
                           </span>
                            </li>


                            <li className="train_seats-item">
                                <p className="train_seats-type">Плацкарт</p>
                                <p className="train_seats-count">
                                    2500
                                </p>
                                <span className="train_seats-price">
                              от
                              <PriceFormat
                                  title="train_seats-price"
                                  value={2500}
                              />
                              <img
                                  className="train_seats-price-currency"
                                  src={rub}
                                  alt="rub"
                              />
                           </span>
                            </li>

                            <li className="train_seats-item">
                                <p className="train_seats-type">Купе</p>
                                <p className="train_seats-count">
                                    2500
                                </p>
                                <span className="train_seats-price">
                              от
                              <PriceFormat
                                  title="train_seats-price"
                                  value={2500}
                              />
                              <img
                                  className="train_seats-price-currency"
                                  src={rub}
                                  alt="rub"
                              />
                           </span>
                            </li>

                            <li className="train_seats-item">
                                <p className="train_seats-type">Люкс</p>
                                <p className="train_seats-count">
                                    2500
                                </p>
                                <span className="train_seats-price">
                              от
                              <PriceFormat
                                  title="train_seats-price"
                                  value={2500}
                              />
                              <img
                                  className="train_seats-price-currency"
                                  src={rub}
                                  alt="rub"
                              />
                           </span>
                            </li>

                        </ul>
                        <div className="train_options">
                            {wifi('train_options-icon')}
                            {express('train_options-icon')}
                            {food('train_options-icon')}
                        </div>
                        <button
                            type="button"
                            className={`button ${
                                option === 'verification'
                                    ? 'verification_button'
                                    : 'train_seats-button'
                            }`}
                            onClick={handleClick}
                        >
                            {option === 'verification' ? 'Изменить' : 'Выбрать места'}
                        </button>
                    </>
                )}
                {option === 'ticket_header-train' && (
                    <div className="train_time">
                        <img className="train_icon-clock" src={clock} alt="clock"/>
                        <Duration
                            hours={moment.unix("00").utc().format('H')}
                            minutes={moment.unix("10").utc().format('m')}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default TrainCard;
