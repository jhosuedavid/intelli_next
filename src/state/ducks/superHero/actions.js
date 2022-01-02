import {createAction} from 'redux-actions';

import types from './types';
import {SUPER_HEROES_ENDPOINT} from '../../../config';

export const superHeroApiCall = createAction(types.API_CALL);
export const setHero = createAction(types.SET_HERO);

export const getSuperHeroes = (superHeroId) => async (dispatch) =>
    dispatch(superHeroApiCall({
        preConfig: {
            ...SUPER_HEROES_ENDPOINT.get,
            url: SUPER_HEROES_ENDPOINT.get.url
                .replace(':id', superHeroId),
        },
        onComplete: (response) => {
            dispatch(setHero(response.data));
        },
    }));

export default {
    getSuperHeroes,
};
