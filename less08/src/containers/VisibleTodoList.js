import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import GetFilter from './../reducers/GetFilter';

import { withRouter } from 'react-router'

//Todo -> TodoList -> VisibleTodoList

const mapStateTodoListProps = (state,{params})=>({
  todos: GetFilter(state.todos, params.filter || 'all'),
})

const mapDisparchTodoListProps = (dispatch)=>({
    onTodoClick(id){
       dispatch(actions.toggleTodo(id))
    }
})
const VisibleTodoList = withRouter(connect(
	mapStateTodoListProps,
	mapDisparchTodoListProps
)(TodoList));

export default VisibleTodoList