import types from './types';
import authTypes from '../auth/types';
import initialState from '../../initialState';

const superHero = (state = {}, action) => {
    switch (action.type) {
        case types.SET_HERO: {
            return {
                ...state,
                hero: {
                    ...state.hero,
                    ...action.payload,
                },
            }
        }
        case authTypes.SESSION_CLOSE: {
            return {
                ...initialState.superHero,
            };
        }
        default: {
            return state;
        }
    }
};

export default superHero;
