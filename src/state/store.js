import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

import * as reducers from './ducks';
import initialState from './initialState';
import {api} from './middlewares';

const configuraStore = () => {
    const middlewares = [
        api,
        thunk,
    ];

    const rootReducer = combineReducers({
        ...reducers,
    });

    const rootPersistConfig = {
        key: 'root',
        storage: AsyncStorage,
    };

    const persistedReducer = persistReducer(
        rootPersistConfig,
        rootReducer
    );

    const store = createStore(
        persistedReducer,
        initialState,
        compose(applyMiddleware(...middlewares)),
    );

    const persistor = persistStore(store);

    return {
        store,
        persistor,
    };
};

export default configuraStore;
