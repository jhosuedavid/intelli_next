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
        default: {
            return state;
        }
    }
};

export default auth;
