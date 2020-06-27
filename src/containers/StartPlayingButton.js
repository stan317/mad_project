import React from 'react'
import {startRound, nextPlayer, nextWord, changeDisplay} from '../actions'
import {connect} from 'react-redux'
import RouterButton from '../components/RouterButton'

const StartPlayingButton = ({wordCount, startRound}) => {
    return(
        <RouterButton  whereTo={"/game"} buttonName="Start playing!"
        onClick={() => startRound()}
        disabled={wordCount<15}/>
    )
}

const mapStateToProps = state => ({
    wordCount: state.wordList.list.length
})

const mapDispatchToProps = dispatch => ({
    startRound: () => {
        dispatch(startRound());
        dispatch(nextPlayer());
        dispatch(nextWord());
        dispatch(changeDisplay('NEW_ROUND'))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPlayingButton)