import React from 'react';
import './Players.css';
import RouterButton from '../containers/RouterButton.js'
import PlayerInput from '../containers/PlayerInput'
import PlayerList from '../containers/PlayerList'


const Players =() => {
    return (
        <div>
            <h1>Players</h1>
            <p >Number of players: </p>
            <PlayerList />
            <PlayerInput />
            <RouterButton  whereTo={"/teams"} buttonName="Create Teams"/>             
        </div>
    );
}
export default Players;