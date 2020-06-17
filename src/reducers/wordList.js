const wordList = (state = [], action) => {
    switch (action.type){

        case 'ADD_WORD':
            return [{
                id: action.id,
                word: action.word
            }]

        default:
            return state
    }
}

export default wordList