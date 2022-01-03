import {createAction} from 'redux-actions';

import types from './types';
import {setModules} from '../modules/actions';
import {AUTH_ENDPOINTS} from '../../../config';

export const apiCall = createAction(types.API_CALL);
export const setUser = createAction(types.LOGIN);
export const setError = createAction(types.SET_ERROR);
export const cleanError = createAction(types.CLEAN_ERROR);
export const sessionClose = createAction(types.SESSION_CLOSE);

export const login = (data) => async (dispatch) =>
    dispatch(apiCall({
        preConfig: {
            ...AUTH_ENDPOINTS.login,
            data,
        },
        onComplete: (response) => {
            const {modules, user, token} = response.data;
            dispatch(setModules(modules));
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
    apiCall,
    setUser,
    setError,
    cleanError,
    login,
};
