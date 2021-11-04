import React from 'react';
import Blinds from '../Blinds';
import Climate from '../Climate';
import Energy from '../Energy';
import Lights from '../Lights';
import './style.css';

const Dashboard = ({data}) => {
    return(
        <>
        <main className="dashboard">
            <Blinds state={data.blinds} />
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
            <Lights lights={data.lights} />
        </main>
        </>
    );
}

export default Dashboard;