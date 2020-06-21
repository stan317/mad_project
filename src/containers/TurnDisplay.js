import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { foundWord, nextWord, nextPlayer } from '../actions'

const TurnDisplay = ({currentPlayer, currentWord, currentWordId, playingTeam, round, passWord, foundWord, Team1Points, Team2Points}) => {
    return (<div>
        <h1>Round {round} points {Team1Points} {Team2Points}</h1>
        <h1>{playingTeam}</h1>
            <GameCard currentPlayer={currentPlayer}
                word = {currentWord}
                passOnClick={() => passWord()} 
                winOnClick={() => foundWord(currentWordId, playingTeam)}/></div>
    )
}

const mapStateToProps = state => ({
    currentPlayer: state.playerList.currentPlayer.name,
    currentWord: state.wordList.currentWord.word,
    currentWordId: state.wordList.currentWord.id,
    playingTeam: state.playerList.playingTeam,
    round: state.game.roundCount,
    Team1Points: state.game.points[1],
    Team2Points: state.game.points[2],
})
  
const mapDispatchToProps = (dispatch) => ({
    foundWord: (wordId, team) => {
        dispatch(foundWord(wordId, team));
        dispatch(nextWord())
    },
    passWord: () =>
        dispatch(nextWord()),
    nextPlayer: () =>
        dispatch(nextPlayer())
})

export default connect(mapStateToProps, mapDispatchToProps)(TurnDisplay)
