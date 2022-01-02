import types from './types';

const auth = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN: {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            }
        }
        case types.SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case types.CLEAN_ERROR: {
            return {
                ...state,
                error: '',
            }
        }
        default: {
            return state;
        }
    }
};

export default auth;
