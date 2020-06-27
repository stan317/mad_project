import React from 'react';
import {Paper} from '@material-ui/core';
import {WINEQUAL, WIN} from '../constants';
import RouterButton from '../components/RouterButton';
import "./EndCard.css";

const EndCard = ({team1Points, team2Points, onClick}) => (
        <Paper className="gamePaper">
            <div className="message">
                <h1>Congratulations!</h1>
                    {
                        (team1Points > team2Points) ? (WIN + " Team 1!") 
                        : (team1Points === team2Points) ? (WINEQUAL)
                        : (WIN + " Team 2!")
                    }
            </div>
        <RouterButton whereTo={"/"} color="primary" buttonName={"Play Again!"} onClick={onClick}/>
        </Paper>
)



export default EndCard;
