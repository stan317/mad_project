const round = (state = {wordsLeft: [], roundCount: 0}, action) => {
    switch (action.type){
        case 'START_ROUND':
            state.wordsLeft = action.words
            state.roundCount += 1
            return state

        case 'FOUND_WORD':
            state.wordsLeft = state.wordsLeft.filter( word =>
                word.id !== action.id)
            return state
        default:
            return state
    }
}

export default round