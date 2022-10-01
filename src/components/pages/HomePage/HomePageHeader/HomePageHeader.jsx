import React from 'react';
import './HomePageHeader.css';
import Logo from '../../../Logo/Logo';
import Menu from '../../../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

function HomePageHeader() {
    return (
        <div className='home-page'>
            <Logo/>
            <Menu/>
            <div className='home-header'>
                <div className='header-title'>
                    <div className='header-title__first'>Вся жизнь -</div>
                    <div><b>путешествие!</b></div>
                </div>
                <SearchForm/>
            </div>
        </div>
    );
}

export default HomePageHeader;
