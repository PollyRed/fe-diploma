import React from 'react';
import './TicketOption.css';
import PropTypes from "prop-types";

function TicketOption(props) {
    const {image, text} = props;
    return (
        <div className="ticket-option">
            <div className="ticket-option__image-wrapper">
                <img src={image} alt=""/>
            </div>
            <span className="ticket-option__text">{text}</span>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
        </div>
    );
}

TicketOption.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default TicketOption;
