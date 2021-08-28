// Core
import { combineReducers } from 'redux';

// Reducers
import { pushInitData, currentIdReducer, currentFilter } from '../reducers';

export const rootReducer = combineReducers({
    pushInitData,
    currentId: currentIdReducer,
    currentFilter,
});
