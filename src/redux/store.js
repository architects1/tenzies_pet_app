import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import gameReducer from "./gameReducer";

const store = createStore(combineReducers(gameReducer),applyMiddleware(thunk))
export default store;