import {combineReducers} from 'redux';
import authReducer from './auth';
import playersReducer from './players';


const reducers = combineReducers({
	auth: authReducer,
	players: playersReducer,

});

export default reducers;

   