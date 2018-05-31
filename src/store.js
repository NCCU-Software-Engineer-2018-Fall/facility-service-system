import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/index';
import { loadState, saveState } from './localstorage';

const store = createStore(
  reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState().loginReducer)
})

export default store;