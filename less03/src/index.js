import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import throttle from 'lodash/throttle'


import Root from './components/Root'
import RootReducers from './reducers/RootReducers'
import {loadState,saveState} from './store/localState'



const initialState = loadState();

const store = createStore(
	RootReducers,
	initialState
);

// store.subscribe(() => {
//   saveState(store.getState())
// })

// store.subscribe(()=>{
// 	saveState({
// 		Todos:store.getState().Todos
// 	})
// });


store.subscribe(throttle(() => {
  saveState({
    Todos:store.getState().Todos
  })
}, 1000))

console.log(store.getState())

render(
  <Root store={store} />,
  document.getElementById('root')
)