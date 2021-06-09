// Core
import { combineReducers } from 'redux';

// Reducers
import { pushInitData } from '../reducers';
import { currentIdReducer } from '../reducers';


export const rootReducer = combineReducers({
    pushInitData,
    currentId: currentIdReducer,
});
