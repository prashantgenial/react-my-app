import { combineReducers } from 'redux';
import postReducer from './postReducer';
import paramReducer from './paramReducer';

export default combineReducers({posts:postReducer,parameters:paramReducer});