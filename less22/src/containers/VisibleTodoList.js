import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import {getVisibleTodos,getIsFstching} from './../reducers/RootReducers';

import { withRouter } from 'react-router'

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
        const { filter, fetchTodos, requestTodos } = this.props;
        requestTodos(filter);
        fetchTodos(filter)
    }
    render(){
        const {toggleTodo,todos,isFetching} = this.props;
        if(isFetching && !todos.length){
          return <p>loading</p>
        }
      
          
        return <TodoList  
          onTodoClick={toggleTodo}
          todos={todos}
         />
    }
}

const mapStateTodoListProps = (state, ownProps) => {
  const filter = ownProps.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching:getIsFstching(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(connect(
  mapStateTodoListProps,
  actions
)(VisibleTodoList));


export default VisibleTodoList