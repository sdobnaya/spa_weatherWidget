// Core
import { combineReducers } from 'redux';

// Reducers
import { pushInitData } from '../reducers';
import { setCurrentId } from '../reducers';


export const rootReducer = combineReducers({
    pushInitData,
    setCurrentId,
});
