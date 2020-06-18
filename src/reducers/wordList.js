const wordList = (state = [], action) => {
    switch (action.type){

        case 'ADD_WORD':
            return [
                ...state,
                {id: action.id,
                word: action.word,
                found: false}
            ]
        
        case 'FOUND_WORD':
            return state.map( word =>
                (word.id === action.id) ? {...word, found: true}
                : word
            )
        
        case 'START_ROUND':
            return state.map( word =>
                ({...word, found: true})
            )
        
        default:
            return state
    }
}

export default wordList