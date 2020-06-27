import React from 'react'
import {connect} from 'react-redux'
import GameCard from '../components/GameCard'
import { foundWord, nextWord, nextPlayer, changeDisplay, startRound, storeTimeout, pass, reset } from '../actions'
import RoundCard from '../components/RoundCard'
import PlayerCard from '../components/PlayerCard'
import EndCard from '../components/EndCard'
import './TurnDisplay.css'

const TurnDisplay = ({currentPlayer, currentWord, currentWordId, playingTeam, round, display, wordsLeft, team1Points, team2Points, timeout, passCount,
    passWord, foundWord, toGameCard, toPlayerCard, onTimeUp, storeTimeout, reset}) => {
    return (<div>
            <div className="top">
                <div> 
                    <h2> Team 1</h2>
                    <h1> {team1Points} </h1>
                </div>
                <h1> Round {round} </h1>  
                <div> 
                    <h2> Team 2</h2>
                    <h1> {team2Points} </h1>
                </div>
            </div>
        {(display === 'GAME') &&
        <GameCard currentPlayer={currentPlayer}
            word = {currentWord}
            passOnClick={() => passWord()} 
            winOnClick={() => foundWord(currentWordId, playingTeam, (wordsLeft === 1), timeout, round)}
            onTimeUp={() => onTimeUp()}
            storeTimeout={storeTimeout}
            passCount={passCount}/>}
        {(display === 'NEW_ROUND') && 
        <RoundCard roundNumber={round} onClick={() => toPlayerCard()}/>}
        {(display === 'NEW_PLAYER') &&
        <PlayerCard player={currentPlayer} team={playingTeam} onClick={() => toGameCard()}/> }
        {(display === 'END') &&
        <EndCard team1Points={team1Points} team2Points={team2Points} onClick={reset}/>}
        </div>
    )
}

const mapStateToProps = state => ({
    currentPlayer: state.playerList.currentPlayer.name,
    currentWord: state.wordList.currentWord.word,
    currentWordId: state.wordList.currentWord.id,
    playingTeam: state.playerList.playingTeam,
    round: state.game.roundCount,
    team1Points: state.game.points[1],
    team2Points: state.game.points[2],
    wordsLeft: state.wordList.list.filter(word => !word.found).length,
    display: state.game.gameDisplay,
    timeout: state.game.timeoutId,
    passCount: state.game.passCount
    
})
  
const mapDispatchToProps = (dispatch) => ({
    foundWord: (wordId, team, lastWord, timeout, round) => {
        dispatch(foundWord(wordId, team));
        if (lastWord){
            clearTimeout(timeout);
            if (round >= 3){
                dispatch(changeDisplay('END'))
            }
            else {
                dispatch(startRound());
                dispatch(changeDisplay('NEW_ROUND'));
                dispatch(nextWord());
            }}
        else{
            dispatch(nextWord());
        }
    },

    passWord: () => {
        dispatch(nextWord());
        dispatch(pass())},

    toGameCard: () => dispatch(changeDisplay('GAME')),

    toPlayerCard: () => dispatch(changeDisplay('NEW_PLAYER')),

    onTimeUp: () => {
        dispatch(changeDisplay('NEW_PLAYER'));
        dispatch(nextPlayer());
        dispatch(nextWord())
    },

    storeTimeout: id => {
        dispatch(storeTimeout(id))
    },
    
    reset : () => {
        dispatch(reset())
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TurnDisplay)
