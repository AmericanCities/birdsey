import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core'; 
import reducers from './reducers';


export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

