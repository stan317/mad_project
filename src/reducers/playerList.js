

const playerList = (state = [], action) => {
    switch (action.type){

        case 'ADD_PLAYER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    team: 0
                }
            ]
        
        case 'REMOVE_PLAYER':
            return state.filter(player =>
                player.id !== action.id
            )
        
        case 'ASSIGN_TEAMS':
            var teamOneIndexes = state.slice().map(player =>
                player.id
                )
            while (teamOneIndexes.length > state.length/2){
                teamOneIndexes.splice(Math.floor(Math.random()*teamOneIndexes.length),1)
            }
            return state.map(player =>
                (teamOneIndexes.includes(player.id)) ? {...player, team: 1}
                : {...player, team: 2}
            )

        default:
            return state
    }
}

export default playerList