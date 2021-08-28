import { types } from './actionTypes';

export const setState = (payload) => ({
    type: types.SET_INIT_STATE,
    payload,
});

export const setId = (payload) => ({
    type: types.SET_CURRENT_ID,
    payload,
});

export const setFilter = (payload) => ({
    type: types.GET_CURRENT_FILTER,
    payload,
});
