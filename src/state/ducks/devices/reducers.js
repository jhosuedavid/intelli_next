import types from './types';

const devices = (state = {}, action) => {
    switch (action.type) {
        case types.SET_DEVICES: {
            return {
                ...state.devices,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default devices;
