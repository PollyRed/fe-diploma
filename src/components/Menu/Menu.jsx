import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <ul className='menu'>
                <li className='menu__item'>
                    <HashLink className='menu__item-text'
                              to="/#about"
                    >
                        О нас
                    </HashLink>
                </li>
                <li className='menu__item'>
                    <HashLink className='menu__item-text'
                              to="/#how-it-works"
                    >
                        Как это работает
                    </HashLink>
                </li>
                <li className='menu__item'>
                    <HashLink className='menu__item-text'
                              to="/#reviews"
                    >
                        Отзывы
                    </HashLink>
                </li>
                <li className='menu__item'>
                    <HashLink className='menu__item-text'
                              to="/#contacts"
                    >
                        Контакты
                    </HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
