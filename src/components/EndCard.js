import React from 'react';
import {Paper} from '@material-ui/core';
import {WINEQUAL, WIN} from '../constants';
import RouterButton from '../components/RouterButton';
import "./EndCard.css";

const EndCard = ({Team1Points, Team2Points}) => (
        <Paper className="gamePaper">
            <div className="message">
                <h1>Congratulations!</h1>
                    {
                        (Team1Points > Team2Points) ? (WIN + " Team 1!") 
                        : (Team1Points === Team2Points) ? (WINEQUAL)
                        : (WIN + " Team 2!")
                    }
            </div>
        <RouterButton whereTo={"/"} color="primary" buttonName={"Play Again!"}/>
        </Paper>
)



export default EndCard;
