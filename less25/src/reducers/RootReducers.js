import { combineReducers } from 'redux';


import byId, * as fromById from './byid'
import createList, * as fromList from './createList'




const listByFilter = combineReducers({
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

export const getIsFstching =  (state, filter) => {
  fromList.getIsFstching(state.listByFilter[filter]);
};

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);