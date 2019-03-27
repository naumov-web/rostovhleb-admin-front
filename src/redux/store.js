import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const persistConfig = {
    key: 'login',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, reducers);

const storeInstance = createStore(
    persistedReducer, 
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

export const store = storeInstance;

export default () => {
    let persistor = persistStore(storeInstance);
    return { store, persistor };
};
