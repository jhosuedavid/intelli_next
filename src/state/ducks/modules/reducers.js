import types from './types';
import authTypes from '../auth/types';
import initialState from '../../initialState';

const modules = (state = {}, action) => {
    switch (action.type) {
        case types.SET_MODULES: {
            return {
                ...state,
                modules: action.payload,
            }
        }
        case authTypes.SESSION_CLOSE: {
            return {
                ...initialState.modules,
            };
        }
        default: {
            return state;
        }
    }
};

export default modules;
