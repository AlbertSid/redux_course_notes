
import { v4 } from 'node-uuid'
import * as api from './../api'
import { getIsFetching } from './../reducers/RootReducers';



export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    console.log(
      'normalized response',
      normalize(response, schema.todo)
    )
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response,
    });
  });

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})





export const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter,
});


export const fetchTodos = (filter) => (dispatch, getState) => {
  
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(
    response => {
      // console.log(
      //   'normalized response',
      //   normalize(response, schema.arrayOfTodos)
      // )
      // dispatch({
      //   type: 'RECEIVE_TODOS',
      //   filter,
      //   response,
      // });
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos),
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