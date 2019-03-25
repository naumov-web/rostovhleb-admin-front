// @flow
import * as React from 'react';
import Routes from './pages';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
//import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import 'styles/common.css';
import 'styles/normalize.css';

const { store, persistor } = configureStore();

// EXPORTED APP
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="wrapper">
        <h1>Ростовский хлебозавод. Административная панель</h1>
        <Routes />
      </div>
    </PersistGate>
  </Provider>
);

export default App;
