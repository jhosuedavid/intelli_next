import {createAction} from 'redux-actions';

import types from './types';
import {AUTH_ENDPOINTS} from '../../../config';

export const apiCall = createAction(types.API_CALL);
export const setUser = createAction(types.LOGIN);
export const setError = createAction(types.SET_ERROR);
export const cleanError = createAction(types.CLEAN_ERROR);

export const login = (data) => async (dispatch) =>
    dispatch(apiCall({
        preConfig: {
            ...AUTH_ENDPOINTS.login,
            data,
        },
        onComplete: (response) => {
            const {user, token} = response.data;
            dispatch(
                setUser({
                    ...user,
                    token,
                })
            );
        },
        onEnd: (error = null) => {
            if (error) {
                dispatch(
                    setError(error.response.data.msg)
                );
            }
        },
    }));

export default {
    login,
};
