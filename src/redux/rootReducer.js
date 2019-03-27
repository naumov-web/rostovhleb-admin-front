import { combineReducers } from 'redux';

import * as reducers from './ducks';
import loginReducer from './login-reducer';

const rootReducer = combineReducers({
    ...reducers,
    login: loginReducer
});

export default rootReducer;
