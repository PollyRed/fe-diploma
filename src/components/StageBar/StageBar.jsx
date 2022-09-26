import React from 'react';
import './StageBar.css';

export default function StageBar() {
    const stages = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];

    return (
        <div
            className={`stage-bar 'stage-bar-gray'`}>
            <ul className="stage-bar_list stages_wrapper">
                {stages.map((el, index) => (
                    <li className='stage-bar_list-item passed active' key={el}>
                        <span className="stage-bar_list-icon">
                            <span className="stage-bar_list-stage">{index + 1}</span>
                        </span>
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    );
}
