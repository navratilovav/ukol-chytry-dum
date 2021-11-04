import React, { useState } from 'react';
import blindsClosed from './blinds-closed.svg';
import blindsOpen from './blinds-open.svg';
import './style.css';

const Blinds = ({state}) => {

    const [blinds, setStateBlinds] = useState(state);

    const handleBlindsOpen = () => {
        setStateBlinds('open');
    }

    const handleBlindsClosed = () => {
        setStateBlinds('closed');
    }

    return(
        <>
            <div className="blinds">
				<div className="blinds__icon"><img src={blinds ==='open' ? blindsOpen : blindsClosed} /> </div>
				<div className="blinds__name">Žaluzie</div>
				<div className="blinds__controls">
					<button className={blinds ==='open' ? 'button button--active' : 'button'} onClick={handleBlindsOpen}>Otevřeno</button>
					<button className={blinds ==='closed' ? 'button button--active' : 'button'} onClick={handleBlindsClosed}>Zavřeno</button>
				</div>
			</div>
        </>
    );
}

export default Blinds;