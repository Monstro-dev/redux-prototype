import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main/Main';
import appStore from './stores/app.store';

// test logic of redux
import { addTodo, removeTodo, toggleTodo } from './actions/todo.action';
// import { visibilityFilter, setFilter } from './actions/viewFilter.action';
// import appStore from './stores/app.store';
//
// console.log(appStore.getState());
//
// let unsub = appStore.subscribe( () => {
//     console.log(appStore.getState());
// });
//
appStore.dispatch(addTodo('The first todo content'));
appStore.dispatch(addTodo('2nd is here'));
// appStore.dispatch(addTodo('This will be removed'));
appStore.dispatch(addTodo('I am the last todo'));
//
// appStore.dispatch(removeTodo(2));
//
// appStore.dispatch(setFilter(visibilityFilter.SHOW_ACTIVE));
//
// appStore.dispatch(toggleTodo(2));
//
// unsub();

ReactDOM.render(
    <Provider store={appStore}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
