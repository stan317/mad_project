const test = [
    {
        id: 10,
        name: "kev",
        team: 1,
        alreadyPlayed: false
    },
    {
        id: 11,
        name: "stan",
        team: 1,
        alreadyPlayed: false
    },
    {
        id: 12,
        name: "jeanne",
        team: 2,
        alreadyPlayed: false
    },
    {
        id: 13,
        name: "laf",
        team: 2,
        alreadyPlayed: false
    }
]
const playerList = (state = {list: test, currentPlayer: ({id:0, name:"ptest", alreadyPlayed:false}), playingTeam: 0}, action) => {
    switch (action.type){

        case 'ADD_PLAYER':
            return ({
                ...state,
                list: [
                ...state.list,
                {
                    id: action.id,
                    name: action.name,
                    team: 0,
                    alreadyPlayed: false
                }]
            })
        
        case 'REMOVE_PLAYER':
            return ({
                ...state,
                list: state.list.filter(player =>
                player.id !== action.id)
            })
        
        case 'ASSIGN_TEAMS':
            var teamOneIndexes = state.list.slice().map(player =>
                player.id
                )
            while (teamOneIndexes.length > state.list.length/2){
                teamOneIndexes.splice(Math.floor(Math.random()*teamOneIndexes.length),1)
            }
            return {
                ...state,
                list: state.list.map(player =>
                    (teamOneIndexes.includes(player.id)) ? {...player, team: 1}
                    : {...player, team: 2}
                )
            }

        case 'NEXT_PLAYER':
            var nextTeam = 2 - state.playingTeam
            var nextPlayers = state.list.filter( player =>
                !player.alreadyPlayed & player.team===nextTeam
            )
            var nextPlayer = nextPlayers[0]
            var updatedList = (nextPlayers.length===1)
                ? state.list.map(player =>
                    (player.team === nextTeam) ? {...player, alreadyPlayed: false}
                    : player
                )
                : state.list.map(player =>
                    (player.id === nextPlayer.id) ? {...player, alreadyPlayed: true}
                    : player
                )
            return {
                list: updatedList,
                currentPlayer: nextPlayer,
                playingTeam: nextTeam
            }

        case 'START_ROUND':
            return {
                ...state,
                list: state.list.map(player =>
                    ({...player, alreadyPlayed: false})
                ),
                playingTeam: Math.floor(2*Math.random())
            }

        default:
            return state
    }
}

export default playerList