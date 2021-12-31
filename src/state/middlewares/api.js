import axios from 'axios';

import {authTypes} from '../ducks/auth';

const api = ({dispatch, getState}) => (next) => async (action) => {
    const types = [authTypes.API_CALL];

    if (!types.includes(action.type)) {
        return next(action);
    }

    const {
        preConfig = {},
        authorization = false,
        onStart = () => {},
        onEnd = () => {},
        onComplete = () => {},
    } = action.payload;

    const {auth: {user: {token}}} = getState();

    const config = authorization ? {
        ...preConfig,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    } : preConfig;

    try {
        console.log('aqui::: ', config);
        dispatch(onStart());
        const response = await axios(config);
        onComplete(response);
    } catch (error) {
        onEnd(error);
    }
};

export default api;
