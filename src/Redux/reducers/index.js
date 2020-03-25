import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'

const allReducers = combineReducers({
    currentUser: currentUserReducer
});

export default allReducers;
