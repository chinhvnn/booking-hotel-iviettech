import { combineReducers } from "redux"
import roomReducer from './roomReducer'

export const rootReducer = combineReducers({
    room : roomReducer,
  })