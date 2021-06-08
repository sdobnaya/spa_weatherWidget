import { types } from './actionTypes';

export const setState = (payload) => ({
    type: types.SET_INIT_STATE,
    payload,
});

export const setId = (payload) => ({
    type: types.SET_CURRENT_ID,
    payload,
});
