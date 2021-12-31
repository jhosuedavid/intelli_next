import {createAction} from 'redux-actions';

import types from './types';
import {AUTH_ENDPOINTS} from '../../../config';

export const apiCall = createAction(types.API_CALL);
export const setUser = createAction(types.LOGIN);

export const login = (data) => async (dispatch) =>
    dispatch(apiCall({
        preConfig: {
            ...AUTH_ENDPOINTS.login,
            data,
        },
        onComplete: (response) => {
            console.log(response);
            const {user, token} = response.data;
            dispatch(
                setUser({
                    ...user,
                    token,
                })
            );
        },
    }));

export default {
    login,
};
