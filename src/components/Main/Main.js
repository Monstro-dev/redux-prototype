require('./Main.scss');

import React from 'react';
import TodoList from '../TodoList/TodoList';

class Main extends React.Component {
  render() {
    return (
        <div>
            <h1>Inspect the console to see the redux flow</h1>
            <TodoList />
        </div>
    );
  }
}

export default Main;
