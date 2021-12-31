import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import reportWebVitals from './reportWebVitals';
import Navigation from "./navigation";
import configuraStore from "./state/store";

const {store, persistor} = configuraStore();
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate
              loading={null}
              persistor={persistor}
          >
              <Navigation />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
