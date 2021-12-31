import {createAction} from 'redux-actions';

import authTypes from '../auth/types';
import types from './types';
import {DEVICES_ENDPOINTS} from '../../../config';

export const apiCall = createAction(authTypes.API_CALL);
export const setDevices = createAction(types.SET_DEVICES);

export const getDevices = () => async (dispatch) =>
    dispatch(apiCall({
        authorization: true,
        preConfig: {
            ...DEVICES_ENDPOINTS.get,
        },
        onComplete: (response) => {
            const {data: {count, results: devices}} = response.data;
            dispatch(
                setDevices({
                    devices,
                    count,
                })
            );
            console.log('Response: ', response);
        },
    }));

export default {
    getDevices,
};
