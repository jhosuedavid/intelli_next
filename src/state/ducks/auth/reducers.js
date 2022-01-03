import types from './types';
import initialState from '../../initialState';

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
        case types.SESSION_CLOSE: {
            return {
                ...initialState.auth,
            };
        }
        default: {
            return state;
        }
    }
};

export default auth;
