import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import historyInstance from 'redux/history';
import reducers from './rootReducer';

const persistConfig = {
    key: 'login',
    storage,
}

export const history = historyInstance;
  
const persistedReducer = persistReducer(
    persistConfig, 
    reducers
);

const storeInstance = createStore(
    persistedReducer, 
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(historyInstance)
        )
    )
);

export const store = storeInstance;

export default () => {
    let persistor = persistStore(storeInstance);
    return { store, persistor };
};
