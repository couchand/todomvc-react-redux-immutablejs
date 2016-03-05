import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { visibleTodosSelector } from '../selectors'
import { saveTodo, toggleTodo, destroyTodo, clearCompleted } from '../actions'

const filterTodos = (state) => {
  return {
    todos: visibleTodosSelector(state)
  }
}

const actions = { saveTodo, toggleTodo, destroyTodo, clearCompleted }

const VisibleTodoList = connect(filterTodos, actions)(TodoList)

export default VisibleTodoList
