import types from './types';

const modules = (state = {}, action) => {
    switch (action.type) {
        case types.SET_MODULES: {
            return {
                ...state,
                modules: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};

export default modules;
