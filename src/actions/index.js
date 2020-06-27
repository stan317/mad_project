let nextPlayerId = 0
let nextWordId = 0

export const addPlayer = name => ({
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    name
})

export const removePlayer = id => ({
    type: 'REMOVE_PLAYER',
    id
})

export const assignTeams = () => ({
    type: 'ASSIGN_TEAMS'
})

export const addWord = word => ({
    type: 'ADD_WORD',
    id: nextWordId++,
    word
})

export const addPoint = team => ({
    type: 'ADD_POINT',
    team
})

export const startRound = () => ({
    type: 'START_ROUND',
})

export const foundWord = (id, team) => ({
    type: 'FOUND_WORD',
    id,
    team
})

export const nextPlayer = () =>({
    type: 'NEXT_PLAYER'
})

export const nextWord = () => ({
    type: 'NEXT_WORD'
})

export const changeDisplay = display => ({
    type: 'CHANGE_DISPLAY',
    display
})

export const pass = () => ({
    type: 'PASS',
})

export const storeTimeout = id => ({
    type: 'STORE_TIMEOUT',
    id
})

export const reset =() => ({
    type: 'RESET'
})
