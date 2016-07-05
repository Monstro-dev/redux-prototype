require('./TodoList.scss');

import React from 'react';
import Todo from './../Todo/Todo';
import AddTodo from '../../containers/AddTodo.container';

class TodoList extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-4 col-sm-offset-4'>
                    <h1>Todo List</h1>
                    <ul>
                        {this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
                    </ul>
                    <AddTodo />
                </div>
            </div>
        );
    }
}

export default TodoList;
