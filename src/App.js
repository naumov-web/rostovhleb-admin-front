// @flow
import * as React from 'react';
import Routes from './pages';
//import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'connected-react-router';
//import { PersistGate } from 'redux-persist/integration/react';

import 'styles/common.css';
import 'styles/normalize.css';

// EXPORTED APP
const App = () => (
  <div className="wrapper">
    <h1>Ростовский хлебозавод. Административная панель</h1>
    <Routes />
  </div>
);

export default App;
