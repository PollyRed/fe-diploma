import React from 'react';
import './OrderPageHeader.css';
import Logo from "../../../Logo/Logo";
import Menu from "../../../Menu/Menu";
import OrderSearchForm from "../OrderSearchForm/OrderSearchForm";
import StageBar from "../StageBar/StageBar";


function OrderPageHeader() {
    return (
        <div className='order-page-header'>
            <Logo/>
            <Menu/>
            <OrderSearchForm/>
            <StageBar/>
        </div>
    );
}

export default OrderPageHeader;
