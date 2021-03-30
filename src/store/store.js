import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducer, { watchLoadData } from '../redux/ducks/orders';


const saga = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(saga));

saga.run(watchLoadData);
