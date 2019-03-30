// @flow
import * as React from 'react';
import Routes from './pages';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
import history from 'redux/history';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import 'styles/common.css';
import 'styles/normalize.css';

const { store, persistor } = configureStore();

// EXPORTED APP
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div className="wrapper">
          <h1>Ростовский хлебозавод. Административная панель</h1>
          <Routes />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
