import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

const GameCard = ({word, currentPlayer, winOnClick, passOnClick}) => (
        //<Paper className="gamePaper" elevation={3} color="black">
        <div>
            <h1 className="player"> {currentPlayer}'s turn </h1>
            <h1 className="word"> {word} </h1>
            <IconButton onClick={passOnClick}> Pass </IconButton>
            <IconButton onClick={winOnClick}> Win </IconButton>
        </div>
        //</Paper>
)

export default GameCard