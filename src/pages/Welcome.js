import React from 'react';
import logo from '../logo.svg';
import RouterButton from '../components/RouterButton.js';
import './Welcome.css'


const Welcome =() => {
    return (
        <div className="frontPage">
            <img src={logo} alt={logo} width='300vh' />
            <div >
                <RouterButton whereTo={"/players"} buttonName={"Play Time's up!"} />
            </div>
        </div>
    );
};

export default Welcome;