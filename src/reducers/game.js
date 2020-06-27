const game = (state = {roundCount: 0, points: {1: 0, 2: 0}, gameDisplay: 'END', timeoutId: 0, passCount: 0}, action) => {
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

        case 'STORE_TIMEOUT':
            return ({
                ...state,
                timeoutId: action.id
            })

        case 'PASS':
            return ({
                ...state,
                passCount: (state.passCount + 1)
            })

        case 'NEXT_PLAYER':
            return({
                ...state,
                passCount: 0
            })
        
        case 'RESET':
            return ({
                ...state, 
                roundCount: 0,
                points: {1: 0, 2: 0},
                passCount: 0

            })    
        default:
            return state
    }
}

export default game