import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core'; 
import {combineReducers} from 'redux';
import UsersReducer from './reducers/users';



const reducers = combineReducers({
	users: UsersReducer
});


export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

