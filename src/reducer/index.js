import counterReducer from './counterReducer';
import loggedReducer from './loggedReducer';
import {combineReducers} from 'redux';

 export const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
 });

