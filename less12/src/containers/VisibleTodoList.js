import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import {getVisibleTodos} from './../reducers/RootReducers';

import { withRouter } from 'react-router'

//Todo -> TodoList -> VisibleTodoList

const mapStateTodoListProps = (state,{params})=>({
  todos: getVisibleTodos(state, params.filter || 'all'),
})

const VisibleTodoList = withRouter(connect(
	mapStateTodoListProps,
	{ onTodoClick: actions.toggleTodo }
)(TodoList));

export default VisibleTodoList



