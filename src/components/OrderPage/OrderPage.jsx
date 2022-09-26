import React from 'react';
import './OrderPage.css';
import OrderPageHeader from '../OrderPageHeader/OrderPageHeader';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import TrainSelector from "../TrainSelector/TrainSelector";
import Last from "../Last/Last";

function OrderPage() {
    return (
        <div>
            <OrderPageHeader/>
            <div className="order-page__wrapper">
                <div>
                    <SideBar/>
                    <Last/>
                </div>
                <TrainSelector/>
            </div>


            <Footer/>
        </div>
    );
}

export default OrderPage;
