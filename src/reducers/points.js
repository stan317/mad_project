const points = (state = {1: 0, 2: 0}, action) => {
    switch (action.type){
        
        case 'ADD_POINT':
            state[action.team] += 1
            return state
        default:
            return state
    }
}

export default points