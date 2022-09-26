import React from 'react';
import './TrainSelector.css';
import TrainCard from "../TrainCard/TrainCard";

function TrainSelector() {
    return (
        <div className="train-selector">
            <span>найдено 20</span>
            <span className="train-selector__count">
                <span>сортировать по: </span>
                <span className="train-selector__sort">времени</span>
                <span>показывать по: </span>
                <span className="train-selector__selected">5 </span>
                <span>10 </span>
                <span>20 </span>
            </span>
            <ul className="train-selector__cards">
                <li><TrainCard/></li>
                <li><TrainCard/></li>
                <li><TrainCard/></li>
                <li><TrainCard/></li>
                <li><TrainCard/></li>
            </ul>
            <ul className="train-selector__pages">
                <li>&lt;</li>
                <li className="train-selector__page-selected">1</li>
                <li>2</li>
                <li>3</li>
                <li>&gt;</li>
            </ul>
        </div>
    );
}

export default TrainSelector;
