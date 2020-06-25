import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { foundWord, nextWord, nextPlayer, changeDisplay, startRound, storeTimeout } from '../actions'
import RoundCard from '../components/RoundCard'
//import Clock from '../components/Clock'
import PlayerCard from '../components/PlayerCard'
import './TurnDisplay.css'

const TurnDisplay = ({currentPlayer, currentWord, currentWordId, playingTeam, round, display, wordsLeft, Team1Points, Team2Points, timeout, 
    passWord, foundWord, toGameCard, toPlayerCard, onTimeUp, storeTimeout}) => {
    return (<div>
            <div className="top">
                <div> 
                    <h2> Team 1</h2>
                    <h1> {Team1Points} </h1>
                </div>
                <h1> Round {round} </h1>  
                <div> 
                    <h2> Team 2</h2>
                    <h1> {Team2Points} </h1>
                </div> 
            </div>
        {/* <h1>{playingTeam}</h1> */}
        {(display === 'GAME') &&
        <GameCard currentPlayer={currentPlayer}
            word = {currentWord}
            passOnClick={() => passWord()} 
            winOnClick={() => foundWord(currentWordId, playingTeam, (wordsLeft === 1), timeout)}
            onTimeUp={() => onTimeUp()}
            storeTimeout={storeTimeout}/>}
        {(display === 'NEW_ROUND') && 
        <RoundCard roundNumber={round} onClick={() => toPlayerCard()}/>}
        {(display === 'NEW_PLAYER') &&
        <PlayerCard player={currentPlayer} team={playingTeam} onClick={() => toGameCard()}/> }
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
    display: state.game.gameDisplay,
    timeout: state.game.timeoutId
})
  
const mapDispatchToProps = (dispatch) => ({
    foundWord: (wordId, team, lastWord, timeout) => {
        dispatch(foundWord(wordId, team));
        if (lastWord){
            clearTimeout(timeout);
            dispatch(startRound());
            dispatch(changeDisplay('NEW_ROUND'));}
        dispatch(nextWord());
    },
    passWord: () => dispatch(nextWord()),
    toGameCard: () => dispatch(changeDisplay('GAME')),
    toPlayerCard: () => dispatch(changeDisplay('NEW_PLAYER')),
    onTimeUp: () => {
        dispatch(changeDisplay('NEW_PLAYER'));
        dispatch(nextPlayer());
        dispatch(nextWord())
    },
    storeTimeout: id => {
        dispatch(storeTimeout(id))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TurnDisplay)
