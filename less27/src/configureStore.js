

import RootReducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
//import promise from 'redux-promise';

import thunk from 'redux-thunk';

import createLogger from 'redux-logger';

// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) :
//     next(action);

const configureStore = () => {
  //const middlewares = [promise];
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    RootReducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;




