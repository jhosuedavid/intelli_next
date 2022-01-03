import {createAction} from 'redux-actions';

import types from './types';

export const setModules = createAction(types.SET_MODULES);

export default {
    setModules,
}
