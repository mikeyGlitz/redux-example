import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';

const TodoList = ({ todos }) => {
  const myTodos = todos || [];
  return (<div>
    {myTodos.map(todo => <Todo todo={todo} />)}
  </div>)
}

export default connect(state => ({
  todos: state.todo,
}))(TodoList);
