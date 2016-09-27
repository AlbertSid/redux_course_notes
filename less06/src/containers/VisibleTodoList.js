import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import GetFilter from './../reducers/GetFilter';


//Todo -> TodoList -> VisibleTodoList

const mapStateTodoListProps = (state)=>({
    todos:GetFilter(state.Todos,state.Filter)
})

const mapDisparchTodoListProps = (dispatch)=>({
    onTodoClick(id){
       dispatch(actions.toggleTodo(id))
    }
})
const VisibleTodoList = connect(
	mapStateTodoListProps,
	mapDisparchTodoListProps
)(TodoList);

export default VisibleTodoList