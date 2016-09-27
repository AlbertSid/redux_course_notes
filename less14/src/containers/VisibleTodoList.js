import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import {getVisibleTodos} from './../reducers/RootReducers';

import { withRouter } from 'react-router'

//Todo -> TodoList -> VisibleTodoList


const mapStateTodoListProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};


import {fetchTodos} from './../api';
import React,{Component} from 'react';

class VisibleTodoList extends Component{
    componentDidMount(){
        this.fetchTodo()
    }
    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
           this.fetchTodo()
        }
    }
    fetchTodo(){
        etchTodos(this.props.filter).then(todos =>
      		console.log(this.props.filter, todos)
    	);
    }
    render(){
        //console.log(this.props)
        const {onTodoClick,...rest} = this.props;
        return <TodoList  onTodoClick={onTodoClick} {...rest} />
    }
}

VisibleTodoList = withRouter(connect(
	mapStateTodoListProps,
	{ onTodoClick: actions.toggleTodo }
)(VisibleTodoList));


export default VisibleTodoList