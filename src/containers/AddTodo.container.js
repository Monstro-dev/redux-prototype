import {connect} from 'react-redux';
import React from 'react';
import { addTodo } from '../actions/todo.action';

class AddTodo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form
                onSubmit={e => e.preventDefault()}
                ></form>
                <input />
            </div>
        );
    }
}
