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

export const startRound = words => ({
    type: 'START_ROUND',
    words
})

export const foundWord = id => ({
    type: 'FOUND_WORD',
    id
})

