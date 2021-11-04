import React, { useState } from 'react';
import temperatureImg from './temp.svg';
import './style.css';

const Climate = ({temperature, humidity}) => {

    const [temp, setTemperature] = useState(temperature);

    const handleIncrease = () => {
       setTemperature(temp + 1);
    }

    const handleDecrease = () => {
        setTemperature(temp - 1);
     }

    return(
        <>
        <div className="climate">
				<div className="climate__icon"><img src={temperatureImg} /></div>
				<div className="climate__content">
					<div className="climate__temperature">{temp}&deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={handleIncrease}>+</button>
					<button className="button" onClick={handleDecrease}>-</button>
				</div>
			</div>
        </>
    );
}

export default Climate;