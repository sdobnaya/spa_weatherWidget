import { types } from './init/actionTypes';

const initialState = {
    sunny:             '',
    cloudly:           '',
    'min-temperature': '',
    'max-temperature': '',
};

export const pushInitData = (state = [], action) => {
    switch (action.type) {
    case types.SET_INIT_STATE:
        return [...state, action.payload];
    default:
        return state;
    }
};

export const currentIdReducer = (state = null, action) => {
    switch (action.type) {
    case types.SET_CURRENT_ID:
        return action.payload;
    default:
        return state;
    }
};

export const currentFilter = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_CURRENT_FILTER:
        return action.payload;
    default:
        return state;
    }
};
