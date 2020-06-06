import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "../sagas/sagas";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  postPage: postReducer,
  form: formReducer
})

type Reducers = typeof reducers;
export type App = ReturnType<Reducers>

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaWatcher)
