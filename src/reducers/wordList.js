const wordList = (state = [], action) => {
    switch (action.type){

        case 'ADD_WORD':
            return [
                ...state,
                {id: action.id,
                word: action.word
            }]

        default:
            return state
    }
}

export default wordList