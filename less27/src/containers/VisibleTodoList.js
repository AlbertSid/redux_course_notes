import {connect} from 'react-redux';
import { withRouter } from 'react-router'
import React,{Component} from 'react';


import TodoList from './../components/TodoList';
import FetchError from './../components/FetchError'
import * as actions from './../actions';
import { getVisibleTodos, getErrorMessage, getIsFetching } from './../reducers'



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
      const { filter, fetchTodos } = this.props;
      fetchTodos(filter).then(() => console.log('done!'));
    }
    render(){
        const { isFetching, errorMessage, toggleTodo, todos } = this.props;

        //console.log(this.props)

        if(isFetching && !todos.length){
          return (<p>loading...</p>)
        }

        if (errorMessage && !todos.length) {
           return (
             <FetchError message={errorMessage} onRetry={() => this.fetchTodo()} />
           );
        }

        return <TodoList  onTodoClick={toggleTodo} todos={todos} />
    }
}


const mapStateTodoListProps = (state, ownProps) => {
  const filter = ownProps.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  }
};

VisibleTodoList = withRouter(connect(
  mapStateTodoListProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList