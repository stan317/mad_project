import React from 'react'
import {startRound} from '../actions'
import {connect} from 'react-redux'
import RouterButton from '../components/RouterButton'

const StartPlayingButton = ({wordCount, startRound}) => {
    return(
        <RouterButton  whereTo={"/round1"} buttonName="Start playing!"
        onClick={() => startRound()}
        disabled={wordCount<10}/>
    )
}

const mapStateToProps = state => ({
    wordCount: state.wordList.length
})

const mapDispatchToProps = dispatch => ({
    startRound: () => dispatch(startRound())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPlayingButton)