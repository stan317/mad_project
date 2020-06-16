import React from 'react';
import logo from '../logo.svg';
import RouterButton from '../containers/RouterButton.js'


const Welcome =() => {
    return (
        <div>
            <img src={logo} alt={logo} width='30%' />
            <div>
                <RouterButton whereTo={"/players"} buttonName="Play Time's up!" />
            </div>
        </div>
    );
};

export default Welcome;