import React /*{ useCallback, useEffect }*/ from 'react';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
//import Clock from './Clock';
import {useMountEffect} from '../constants';
import './GameCard.css';
import CountDown from '../components/CountDown.js'

const GameCard = ({word, currentPlayer, winOnClick, passOnClick, onTimeUp, storeTimeout}) => {
    useMountEffect(() => {var timeoutId = setTimeout(onTimeUp, 10000); 
        storeTimeout(timeoutId)})
    return (
        <div className="gameFlex">
            <CountDown />
            <Paper className="gamePaper">
                <div className="myPlayer"> 
                    <h1>{currentPlayer}'s turn </h1>
                </div>
                <div className="myWord"> 
                    <h1>{word}</h1> 
                </div>
                <IconButton onClick={passOnClick}> 
                    <CancelIcon fontSize="large" color="primary"></CancelIcon> 
                </IconButton>
                <IconButton onClick={winOnClick}> 
                    <CheckCircleIcon fontSize="large" color="primary"></CheckCircleIcon>
                </IconButton>
            </Paper>
        </div>
    )
}

export default GameCard