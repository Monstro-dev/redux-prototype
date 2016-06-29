// the reducer is used to trasiting states

import { ADD_TODO, REMOVE_TODO, addTodo } from './../actions/todo.action';

// We need to define an initial state
const todoInitialState = [];

// a reducer is a function that:
// @params: state, action
// @return: newState
// NOTE: we cannot mutate the state, we must return a NEW state object
export default function todoReducer( state = todoInitialState, action ) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, // copy the existing todos to new array
                {
                    text: action.text,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            let newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
}
