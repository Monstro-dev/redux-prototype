// define constants, later can save them in a independent filename and then import

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// now action creators

export function addTodo (text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function removeTodo (index) {
    return {
        type: REMOVE_TODO,
        index
    }
}
