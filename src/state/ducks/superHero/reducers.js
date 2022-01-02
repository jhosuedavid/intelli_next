import types from './types';

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
        default: {
            return state;
        }
    }
};

export default superHero;
