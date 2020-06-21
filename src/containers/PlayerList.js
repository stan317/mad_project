import React from 'react'
import {connect} from 'react-redux'
import PlayerItem from '../components/PlayerItem'
import { removePlayer } from '../actions'

const PlayerList = ({playerList, removePlayer}) => (
    <div>
    <ul>
        {playerList.map( player =>
            <PlayerItem 
            key={player.id}
            name={player.name}
            OnClick={() => removePlayer(player.id)}/>
        )}
    </ul>
    </div>
)

const mapStateToProps = state => ({
    playerList: state.playerList.list
})
  
const mapDispatchToProps = dispatch => ({
    removePlayer: id => dispatch(removePlayer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList)
