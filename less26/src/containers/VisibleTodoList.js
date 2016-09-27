import {connect} from 'react-redux';

import TodoList from './../components/TodoList';

import * as actions from './../actions';

import { getVisibleTodos, getErrorMessage, getIsFetching } from './../reducers/RootReducers'


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
      fetchTodos(filter).then(() => console.log('done!'));
    }
    fetchData() {
      const { filter, fetchTodos } = this.props;
      fetchTodos(filter).then(() => console.log('done!'));
    }
    render(){
        const { isFetching, errorMessage, toggleTodo, todos } = this.props;
        
        if(isFetching && !todos.length){
          return <p>loading...</p>
        }

        if (errorMessage && !todos.length) {
           return (
             <FetchError
               message={errorMessage}
               onRetry={() => this.fetchData()}
             />
           );
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
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(connect(
  mapStateTodoListProps,
  actions
)(VisibleTodoList));


export default VisibleTodoList