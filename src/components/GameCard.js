import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import {useMountEffect} from '../constants';
import './GameCard.css';
import CountDown from '../components/CountDown.js'

const GameCard = ({word, currentPlayer, winOnClick, passOnClick, onTimeUp, storeTimeout, passCount}) => {
    useMountEffect(() => {var timeoutId = setTimeout(onTimeUp, 40000); 
        storeTimeout(timeoutId)})
    return (
        <div>
        <div className="gameFlex">
            <CountDown />
        </div>
        <div>
            <Paper className="gamePaper">
                <div className="myPlayer"> 
                    <h1>{currentPlayer}'s turn </h1>
                </div>
                <div className="myWord"> 
                    <h1>{word}</h1> 
                </div>
                <IconButton onClick={passOnClick} disabled={passCount>=3}> 
                    <CancelIcon fontSize="large" color={(passCount>=3) ? "fdfffc" : "primary"}></CancelIcon> 
                </IconButton>
                <IconButton onClick={winOnClick}> 
                    <CheckCircleIcon fontSize="large" color="primary"></CheckCircleIcon>
                </IconButton>
            </Paper>
        </div>
        </div>
    )
}

export default GameCard