require('./Main.scss');

import React from 'react';
// import TodoList from '../TodoList/TodoList';
import VisibleTodoList from '../../containers/VisibleTodoList.container';
import AddTodo from '../../containers/AddTodo.container';

class Main extends React.Component {
  render() {
    return (
        <div>
            <h1>Todo List</h1>
            <VisibleTodoList />
            <AddTodo />
        </div>
    );
  }
}

export default Main;
