
import {
	combineReducers
} from 'redux'


import Todos, * as fromTodos  from './Todos'


const RootReducers = combineReducers({
  Todos,
})


export default RootReducers

export const getVisibleTodos = (state, filter) =>
  fromTodos.GetFilter(state.Todos, filter);