import { combineReducers } from 'redux'
import playerList from './playerList'
import wordList from './wordList'
import points from './points'
import round from './round'

const rootReducer = combineReducers({
  playerList,
  wordList,
  points,
  round
})

export default rootReducer
