import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo.action';

let AddTodo = ({ dispatch }) => {
    let userInput;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!userInput.value.trim()) {
                    return
                }
                dispatch(addTodo(userInput.value))
                userInput.value = ''
            }}>
            <input ref={node => {
                userInput = node
            }} />
            <button type='submit' className='btn btn-success btn-xs'>
                Add Todo
            </button>
            </form>
        </div>
    );
}
AddTodo = connect()(AddTodo)

export default AddTodo
