import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as reducers from './ducks';
import loginReducer from './login-reducer';
import history from './history';

const rootReducer = combineReducers({
    ...reducers,
    login: loginReducer,
    router: connectRouter(history),
});

export default rootReducer;
