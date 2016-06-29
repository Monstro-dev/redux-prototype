// now create a app reducer for the whole app

import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';

const appReducer = combineReducers({
    todoReducer
});

export default appReducer;
