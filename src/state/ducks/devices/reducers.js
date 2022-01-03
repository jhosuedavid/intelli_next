import types from './types';
import authTypes from '../auth/types';

import initialState from '../../initialState';

const devices = (state = {}, action) => {
    switch (action.type) {
        case types.SET_DEVICES: {
            return {
                ...state.devices,
                ...action.payload,
            };
        }
        case authTypes.SESSION_CLOSE: {
            return {
                ...initialState.devices,
            };
        }
        default: {
            return state;
        }
    }
};

export default devices;
