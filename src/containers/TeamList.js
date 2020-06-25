import React from 'react';
import "./TeamList.css";
import { connect } from 'react-redux';

const TeamList = ({team, teamComposition}) => 
        <div className="fullTeam">
            <h2 className="team-name">Team {team}</h2>
            <ul className="team-list">
                {teamComposition.map( player => 
                        <li className="player" key={player.id}>{player.name}</li> 
                )}
            </ul>
        </div>

const mapStateToProps = (state, ownProps) => ({
    teamComposition: state.playerList.list.filter(player =>
        player.team === ownProps.team)
})

export default connect(mapStateToProps)(TeamList)
