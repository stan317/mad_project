import React from 'react'
import {startRound} from '../actions'
import {connect} from 'react-redux'
import RouterButton from '../components/RouterButton'

const StartPlayingButton = ({words, startRound}) => {
    return(
        <RouterButton  whereTo={"/round1"} buttonName="Start playing!"
        onClick={() => startRound(words)}
        disabled={words<10}/>
    )
}

const mapStateToProps = state => ({
    words: state.wordList.length
})

const mapDispatchToProps = dispatch => ({
    startRound: words => dispatch(startRound(words))
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPlayingButton)