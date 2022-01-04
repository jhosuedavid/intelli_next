import axios from 'axios';

import {authTypes} from '../ducks/auth';
import {superHeroTypes} from '../ducks/superHero';
import {API_URL, SUPER_HERO_API_URL} from '../../config';

const api = ({dispatch, getState}) => (next) => async (action) => {
    const types = [
        authTypes.API_CALL,
        superHeroTypes.API_CALL,
    ];

    if (!types.includes(action.type)) {
        return next(action);
    }

    axios.defaults.baseURL = action.type === authTypes.API_CALL ?
        API_URL :
        SUPER_HERO_API_URL;

    const {
        preConfig = {},
        authorization = false,
        onStart = () => {},
        onEnd = () => {},
        onComplete = () => {},
    } = action.payload;

    const config = action.type === authTypes.API_CALL && authorization ? {
        ...preConfig,
        headers: {
            Authorization: `Bearer ${
                getState()
                    .auth
                    .user
                    .token
            }`,
        },
    } : preConfig;

    try {
        dispatch(onStart());
        const response = await axios(config);
        onComplete(response);
        onEnd();
    } catch (error) {
        onEnd(error);
    }
};

export default api;
