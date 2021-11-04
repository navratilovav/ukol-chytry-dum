import React, {useState} from 'react';
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';
import './style.css';

const Light = ({name, state}) => {

    const [light, setLightState] = useState(state);

    const handleClick = () => {
        if (light === 'on') {
            setLightState('off');
        } else {
            setLightState('on');
        }
    }

    return(
        <>
        <div className="light" onClick={handleClick}>
            <div className="light__icon"><img src={light ==='on' ? lightOn : lightOff} /></div>
            <div className="light__name">{name}</div>
        </div>
        </>
    );
}

export default Light;