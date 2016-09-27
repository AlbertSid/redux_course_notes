import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import {getVisibleTodos} from './../reducers/RootReducers';

import { withRouter } from 'react-router'

//Todo -> TodoList -> VisibleTodoList



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
       //  fetchTodos(this.props.filter).then(todos =>
      	// 	this.props.receiveTodos(todos)
    	  // );

        const { filter, receiveTodos } = this.props;
        fetchTodos(filter).then(todos =>
          receiveTodos(filter, todos)
        );
    }
    render(){
        console.log(this.props)
        const {toggleTodo,...rest} = this.props;
        return <TodoList  onTodoClick={toggleTodo} {...rest} />
    }
}


// const mapStateTodoListProps = (state, { params }) => {
//   const filter = params.filter || 'all';
//   return {
//     todos: getVisibleTodos(state, filter),
//     filter,
//   };
// };


const mapStateTodoListProps = (state, ownProps) => {
  const filter = ownProps.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};


// VisibleTodoList = withRouter(connect(
// 	mapStateTodoListProps,
//   { 
//     toggleTodo: actions.toggleTodo, 
//     receiveTodos:actions.receiveTodos 
//   }
// )(VisibleTodoList));

VisibleTodoList = withRouter(connect(
  mapStateTodoListProps,
  actions
)(VisibleTodoList));


export default VisibleTodoList