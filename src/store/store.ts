import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";

const reducers = combineReducers({
  postPage: postReducer
})

type Reducers = typeof reducers;
export type App = ReturnType<Reducers>

export const store = createStore(reducers)
