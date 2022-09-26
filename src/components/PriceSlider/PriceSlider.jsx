import React from 'react';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import './PriceSlider.css'

function PriceSlider() {
    const onChange = (value) => {};

    return (
        <div className="price-slider">
            <h4 className="price-slider__title" htmlFor="slider">
                Стоимость
            </h4>
            <div className="price-slider__label-wrapper">
                <p className="price-slider__label">от</p>
                <p className="price-slider__label">до</p>
            </div>
            <InputRange
                id="slider"
                minValue={1920}
                maxValue={9000}
                step={10}
                onChange={onChange}
                value={{
                    min: 1920,
                    max: 7000,
                }}
            />
        </div>
    );
}

export default PriceSlider;
