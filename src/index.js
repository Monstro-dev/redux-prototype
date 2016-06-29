import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

// test logic of redux
import { addTodo, removeTodo } from './actions/todo.action';
import appStore from './stores/app.store';

console.log(appStore.getState());

let unsub = appStore.subscribe( () => {
    console.log(appStore.getState());
});

appStore.dispatch(addTodo('The first todo content'));
appStore.dispatch(addTodo('2nd is here'));
appStore.dispatch(addTodo('This will be removed'));
appStore.dispatch(removeTodo(2));

unsub();


ReactDOM.render( <Main />, document.getElementById('root'));
