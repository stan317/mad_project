import { combineReducers } from 'redux'
import playerList from './playerList'
import wordList from './wordList'
import game from './game'

const rootReducer = combineReducers({
  playerList,
  wordList,
  game
})

export default rootReducer
