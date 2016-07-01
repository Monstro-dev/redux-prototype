// now create a app reducer for the whole app

import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import filterReducer from './viewFilter.reducer';

const appReducer = combineReducers({
    todoReducer,
    filterReducer
});

export default appReducer;
