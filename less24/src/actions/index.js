
import { v4 } from 'node-uuid'

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id:v4(),
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

import * as api from './../api'
export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

import { getIsFetching } from './../reducers/RootReducers';

export const fetchTodos = (filter) => (dispatch, getState) => {
  
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'RECEIVE_TODOS',
        filter,
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    }
  );
};