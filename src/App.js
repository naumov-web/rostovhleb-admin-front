// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import 'styles/common.css';

// EXPORTED APP
const App = () => (
  <div>
    <h1>Ростовский хлебозавод. Административная панель</h1>
  </div>
);

export default App;
