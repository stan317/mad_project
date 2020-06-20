import React from 'react';
import './Players.css';
import PlayerInput from '../containers/PlayerInput'
import PlayerList from '../containers/PlayerList'
import CreateTeamButton from '../containers/CreateTeamsButton'


const Players =() => {
    return (
        <div>
            <h1>Players</h1>
            <PlayerList />
            <PlayerInput />
            <CreateTeamButton />             
        </div>
    );
}
export default Players;