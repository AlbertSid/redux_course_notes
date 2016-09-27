import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import Root from './components/Root'

import RootReducers from './reducers/RootReducers'

const store = createStore(RootReducers);
//console.log(store.getState())
render(
  <Root store={store} />,
  document.getElementById('root')
)