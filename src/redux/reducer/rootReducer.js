import { combineReducers } from "redux"
import roomReducer from './roomReducer'
import clientReducer from './clientReducer'
import overviewReducer from "./overviewReducer"

export const rootReducer = combineReducers({
    room : roomReducer,
    client : clientReducer,
    overview : overviewReducer,
  })