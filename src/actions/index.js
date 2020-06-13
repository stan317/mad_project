let nextPlayerId = 0
let nextWordId = 0

export const addPlayer = name => ({
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    name
})

export const removePlayer = id => ({
    type: 'REMOVE_PLAYER',
    id: nextWordId++
})

export const assignTeams = () => ({
    type: 'ASSIGN_TEAMS'
})