import React from 'react';
import './Players.css';
import PlayerInput from '../containers/PlayerInput'
import PlayerList from '../containers/PlayerList'
import CreateTeamButton from '../containers/CreateTeamsButton'


const Players =() => {
    return (
        <div>
            <h1>Players</h1>
            <p >Number of players: </p>
            <PlayerList />
            <PlayerInput />
            <CreateTeamButton />             
        </div>
    );
}
export default Players;