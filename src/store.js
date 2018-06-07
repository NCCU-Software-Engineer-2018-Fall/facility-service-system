import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers/index';
import { loadState, saveState } from './localstorage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer']
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export { store, persistor };
