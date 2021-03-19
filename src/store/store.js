import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from '../sagas';
import reducer from '../reducers/reducer';
import { createStore, compose, applyMiddleware } from 'redux';

const saga = createSagaMiddleware();

export const store = createStore(reducer, compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(watchLoadData);