
import {
	combineReducers
} from 'redux'

import Filter from './Filter'
import Todos from './Todos'


const RootReducers = combineReducers({
  Todos,
  Filter
})


export default RootReducers