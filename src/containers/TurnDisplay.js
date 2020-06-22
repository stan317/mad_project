import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { foundWord, nextWord, nextPlayer, changeDisplay, startRound } from '../actions'
import RoundCard from '../components/RoundCard'

const TurnDisplay = ({currentPlayer, currentWord, currentWordId, playingTeam, round, display, wordsLeft, passWord, foundWord, toPlayerCard, toGameCard, Team1Points, Team2Points}) => {
    return (<div>
        <h1>Round {round} points {Team1Points} {Team2Points}</h1>
        <h1>{playingTeam}</h1>
        {(display === 'GAME') &&
        <GameCard currentPlayer={currentPlayer}
            word = {currentWord}
            passOnClick={() => passWord()} 
            winOnClick={() => foundWord(currentWordId, playingTeam, (wordsLeft === 1))}/>}
        {(display === 'NEW_ROUND') && 
        <RoundCard roundNumber={round} onClick={() => toGameCard()}/>}
        </div>
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
    wordsLeft: state.wordList.list.filter(word => !word.found).length,
    display: state.game.gameDisplay
})
  
const mapDispatchToProps = (dispatch) => ({
    foundWord: (wordId, team, lastWord) => {
        dispatch(foundWord(wordId, team));
        if (lastWord){
            dispatch(startRound())
            dispatch(changeDisplay('NEW_ROUND'));}
        dispatch(nextWord());
    },
    passWord: () => dispatch(nextWord()),
    nextPlayer: () => dispatch(nextPlayer()),
    toGameCard: () => dispatch(changeDisplay('GAME')),
    toPlayerCard: () => dispatch(changeDisplay('NEW_PLAYER'))

})

export default connect(mapStateToProps, mapDispatchToProps)(TurnDisplay)
