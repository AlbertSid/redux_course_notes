import { combineReducers } from 'redux';
import byId, * as fromById from './byid'

import createList, * as fromList from './createList'

const idsByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const Todos = combineReducers({
  byId,
  listByFilter
});

export default Todos

export const getVisibleTodos = (state, filter) => {
  const ids =fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId,id));
};