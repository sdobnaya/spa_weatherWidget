import { types } from './init/actionTypes';

export const pushInitData = (state = [], action) => {
    switch (action.type) {
    case types.SET_INIT_STATE:
        return [...state, action.payload];
    default:
        return state;
    }
};

export const setCurrentId = (state = [], action) => {
    switch (action.type) {
    case types.SET_CURRENT_ID:
        return [...state, action.payload];
    default:
        return state;
    }
};
