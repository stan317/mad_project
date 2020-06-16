import React from 'react';
import "./TeamList.css";

export default function TeamList(props) {
    return (
        <div>
            <h2 className="team-name">{props.teamName}</h2>
            <ul className="team-list">
                {props.teamComposition.map((player, i) => {
                    return (
                        <li className="player" key={i}>{player}</li> 
                    );
                })}
            </ul>
        </div>
    );
}

