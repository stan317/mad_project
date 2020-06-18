const game = (state = {roundCount: 0, currentPlayer: 0, points: {1: 0, 2: 0}}, action) => {
    switch (action.type){
        case 'START_ROUND':
            state.roundCount += 1
            return state

        case 'FOUND_WORD':
            state.wordsLeft = state.wordsLeft.filter( word =>
                word.id !== action.id)
            return state 

        case 'ADD_POINT':
            state.points[action.team] += 1
            return state

        default:
            return state
    }
}

export default game