const game = (state = {roundCount: 0, points: {1: 0, 2: 0}, gameDisplay: 'NEW_ROUND'}, action) => {
    switch (action.type){
        case 'START_ROUND':
            return {...state,
                roundCount: state.roundCount+1}

        case 'FOUND_WORD':
            state.points[action.team] += 1
            return state

        case 'CHANGE_DISPLAY':
            return ({
                ...state,
                gameDisplay: action.display
            })
        default:
            return state
    }
}

export default game