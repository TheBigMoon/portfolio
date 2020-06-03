import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";

const reducers = combineReducers({
  postPage: postReducer
})

type Reducers = typeof reducers;
export type App = ReturnType<Reducers>

const store = createStore(reducers)
