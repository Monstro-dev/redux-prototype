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
                {this.props.todos.map(todo => <Todo {...todo} />)}
            </ul>
        );
    }
}

export default TodoList;
