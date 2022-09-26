import React from 'react';
import './SideBar.css';
import TicketOption from "../TicketOption/TicketOption";
import Express from '../../images/ticket-options-icons/express.png';
import Kupe from '../../images/ticket-options-icons/kupe.png';
import Lux from '../../images/ticket-options-icons/lux.png';
import Platzkart from '../../images/ticket-options-icons/platzkart.png';
import Seat from '../../images/ticket-options-icons/seat.png';
import Wifi from '../../images/ticket-options-icons/wifi.png';
import There from '../../images/icons/there-icon.png';
import Back from '../../images/icons/back-icon.png';
import Plus from '../../images/icons/plus-icon.png';
import PriceSlider from "../PriceSlider/PriceSlider";

function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar__dates">
                <div className='side-bar__text'>Дата поездки</div>
                <input className='side-bar__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
                <div className='side-bar__text'>Дата возвращения</div>
                <input className='side-bar__date-input' placeholder='ДД/ММ/ГГ' type="text"/>
            </div>
            <div className='side-bar__line'/>
            <div className='side-bar__ticket-options'>
                <TicketOption image={Kupe} text="Купе"/>
                <TicketOption image={Platzkart} text="Плацкарт"/>
                <TicketOption image={Seat} text="Сидячий"/>
                <TicketOption image={Lux} text="Люкс"/>
                <TicketOption image={Wifi} text="Wi-Fi"/>
                <TicketOption image={Express} text="Экспресс"/>
            </div>
            <div className='side-bar__line'/>
            <PriceSlider/>
            <div className='side-bar__line'/>
            <div>
                <div className='side-bar__block'>
                    <img src={There} alt=""/>
                    <span className='side-bar__block-title'>Туда</span>
                    <img src={Plus} alt=""/>
                </div>
                <div className='side-bar__line'/>
                <div className='side-bar__block'>
                    <img src={Back} alt=""/>
                    <span className='side-bar__block-title'>Обратно</span>
                    <img src={Plus} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
