import React from 'react'
import {assignTeams} from '../actions'
import {connect} from 'react-redux'
import RouterButton from '../components/RouterButton'

const CreateTeamsButton = ({playerCount, dispatch}) => {
    return(
        <RouterButton  whereTo={"/teams"} buttonName="Create Teams"
        onClick={() => dispatch(assignTeams())}
        disabled={playerCount<4}/>
    )
}

const mapStateToProps = state => ({
    playerCount: state.playerList.list.length
})

export default connect(mapStateToProps)(CreateTeamsButton)