import React from 'react'
import {startRound, nextPlayer, nextWord} from '../actions'
import {connect} from 'react-redux'
import RouterButton from '../components/RouterButton'

const StartPlayingButton = ({wordCount, startRound}) => {
    return(
        <RouterButton  whereTo={"/game"} buttonName="Start playing!"
        onClick={() => startRound()}
        disabled={wordCount<10}/>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPlayingButton)