import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { postReducer } from './postReducer';
import { sagaWatcher } from '../sagas/sagas';

const reducers = combineReducers({
  postPage: postReducer,
  form: formReducer
});

type Reducers = typeof reducers;
export type App = ReturnType<Reducers>

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaWatcher);