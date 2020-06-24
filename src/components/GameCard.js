import React, { useCallback, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Clock from './Clock'
import {useMountEffect} from '../constants'
class Timer {
    constructor(onTimeUp, time) {
      this.onTimeUp = onTimeUp;
      this.time = time;
      this.interval = setInterval(
          () => {this.tick()},
          1000
      )
    }
    
    tick() {
    if (this.time>0) {this.time = this.time - 1}
    else {clearInterval(this.interval); this.onTimeUp();}
    }
    
    getTime() {
        return this.time
    }
  }
const GameCard = ({word, currentPlayer, winOnClick, passOnClick, onTimeUp}) => {
    useMountEffect(() => {setTimeout(onTimeUp, 10000)})
    return (
        <div>
        <Paper className="gamePaper" elevation={3} color="black">
            <h1 className="player"> {currentPlayer}'s turn </h1>
            <h1 className="word"> {word} </h1>
            <IconButton onClick={passOnClick}> Pass </IconButton>
            <IconButton onClick={winOnClick}> Win </IconButton>
        </Paper>
        <Clock />
        </div>
    )
}

export default GameCard