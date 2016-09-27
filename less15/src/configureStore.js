import {createStore} from 'redux'
import throttle from 'lodash/throttle'

import RootReducers from './reducers/RootReducers'
import {loadState,saveState} from './store/localState'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

	if(!console.group) {
		return rawDispatch
	}
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
	console.log('%c action', 'color: blue', action);
	const returnValue = rawDispatch(action);
	console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const configureStore = ()=>{

	const initialstate = loadState();

	const store = createStore(
		RootReducers,
		initialstate
	)

    if(process.env.NODE_ENV !== 'production'){
		store.dispatch = addLoggingToDispatch(store);
    }

	store.subscribe(throttle(()=>{
		saveState({
			todos:store.getState().todos
		})
	},1000));

	console.log(store.getState())

	return store;
}


export default configureStore;




