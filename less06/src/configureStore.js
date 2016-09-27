import {createStore} from 'redux'
import throttle from 'lodash/throttle'

import RootReducers from './reducers/RootReducers'
import {loadState,saveState} from './store/localState'

const configureStore = ()=>{

	const initialstate = loadState();

	const store = createStore(
		RootReducers,
		initialstate
	)

	store.subscribe(throttle(()=>{
		saveState({
			todos:store.getState().todos
		})
	},1000));

	console.log(store.getState())

	return store;
}


export default configureStore;




