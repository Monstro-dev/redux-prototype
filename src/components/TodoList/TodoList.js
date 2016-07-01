require('./TodoList.scss');

import React from 'react';
import Todo from './../Todo/Todo';

class TodoList extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </ul>
        );
    }
}

export default TodoList;
