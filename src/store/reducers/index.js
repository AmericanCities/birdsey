import {combineReducers} from 'redux';
import UsersReducer from './users';


const reducers = combineReducers({
	users: UsersReducer
});

export default reducers;

   