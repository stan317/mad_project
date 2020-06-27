
// test list 
const test = [...Array(10).keys()].map( i =>
    ({
        id: 20+i,
        word: String(i),
        found: false
    })
)
const wordList = (state = {list: [], currentWord: ({id: 0, word: "test", found: false}) }, action) => {
    switch (action.type){

        case 'ADD_WORD':
            return {
                ...state,
                list: [
                    ...state.list,
                    {id: action.id,
                    word: action.word,
                    found: false}]
            }
        
        case 'FOUND_WORD':
            return {
                ...state,
                list: state.list.map( word =>
                (word.id === action.id) ? {...word, found: true}
                : word)
            }
        
        case 'START_ROUND':
            return {
                ...state,
                list: state.list.map( word =>
                ({...word, found: false}))
            }
        
        case 'NEXT_WORD':
            var possibleWords = state.list.filter(word =>
                !word.found
            )
            var nextWord = possibleWords[Math.floor(Math.random()*possibleWords.length)]
            return {
                ...state,
                currentWord: nextWord
            }

        case 'RESET':
            return {
                ...state, 
                list:[]
            }

        default:
            return state
    }
}

export default wordList