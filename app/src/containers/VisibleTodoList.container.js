import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo.action'
import TodoList from '../components/TodoList/TodoList'

const getFilteredTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPELETED':
            return todos.filter( t => t.completed )
        case 'SHOW_ACTIVE':
            return todos.filter ( t => !t.completed )
        case 'SHOW_ALL':
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getFilteredTodos(state.todoReducer, state.filterReducer)
    }
}

const VisibleTodoList = connect(mapStateToProps)(TodoList)

export default VisibleTodoList
