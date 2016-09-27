

import RootReducers from './reducers/RootReducers'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

// const addLoggingToDispatch = (store) => {
//   return (next) => {
//     if (!console.group) {
//       return next;
//     }

//     return (action = {type:''}) => {
//       console.group(action.type);
//       console.log('%c prev state', 'color: gray', store.getState());
//       console.log('%c action', 'color: blue', action);

//       const returnValue = next(action);

//       console.log('%c next state', 'color: green', store.getState());
//       console.groupEnd(action.type);
//       return returnValue;
//     };
//   }
// };

// const promise = (store) => (next) => (action) => {
//   if (typeof action.then === 'function') {
//     return action.then(next);
//   }
//   return next(action);
// } 

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    RootReducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;




