require('./Main.scss');

import React from 'react';
// import TodoList from '../TodoList/TodoList';
import VisibleTodoList from '../../containers/VisibleTodoList.container';
import Navbar from '../Navbar/Navbar';


class Main extends React.Component {
  render() {
    return (
        <div className='container'>
            <Navbar />
            <VisibleTodoList />
        </div>
    );
  }
}

export default Main;
