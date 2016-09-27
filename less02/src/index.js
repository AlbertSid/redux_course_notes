import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import Root from './components/Root'

import RootReducers from './reducers/RootReducers'

const persistedState = {
	Todos:[{
		id:'0',
		text:"hello redux",
		completed:false
	}],
    Filter:undefined
}

const store = createStore(
	RootReducers,
	persistedState
);

console.log(store.getState())

render(
  <Root store={store} />,
  document.getElementById('root')
)