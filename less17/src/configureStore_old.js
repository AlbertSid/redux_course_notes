import {createStore} from 'redux'

import RootReducers from './reducers/RootReducers'

const addLoggingToDispatch = (store) => {
  const next = store.dispatch;
  if (!console.group) {
    return next;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = next(action);

    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const addPromiseSupportToDispatch = (store) => {
  const next = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(next);
    }
    return rawDispatch(next);
  };
};
const wrapDispatchWithMiddlewares = (store, middlewares) =>
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store);
  );
  
const configureStore = () => {
  const store = createStore(RootReducers);
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;




