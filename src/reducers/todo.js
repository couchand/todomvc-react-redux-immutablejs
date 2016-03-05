import { List } from 'immutable'
import Todo from '../models/todo'
import {
  ADD_TODO, SAVE_TODO,
  TOGGLE_TODO, DESTROY_TODO,
  TOGGLE_ALL, CLEAR_COMPLETED
} from '../constants/action-types'

function removeTodo(todos, id) {
  return todos.filter(t => t.get('id') !== id)
}

function TodoReducer(todos = List(), action) {
  let title

  switch (action.type) {
    case ADD_TODO:
      title = action.payload.title.trim()
      if (title === '') return todos

      let nextId = 1 + todos.reduce(((max, t) => Math.max(max, t.get('id'))), -1)
      let newTodo = Todo({ title }).merge({ id: nextId })
      return todos.push(newTodo)

    case SAVE_TODO:
      title = action.payload.title.trim()
      if (title === '') return removeTodo(todos, action.payload.id)

      return todos.map(t => t.get('id') === action.payload.id ? t.merge({ title }) : t)

    case TOGGLE_TODO:
      return todos.map(t => t.get('id') === action.payload.id ? t.set('completed', !t.get('completed')) : t)

    case DESTROY_TODO:
      return removeTodo(todos, action.payload.id)

    case TOGGLE_ALL:
      let allCompleted = todos.every(t => t.get('completed'))
      return todos.map(t => t.set('completed', !allCompleted))

    case CLEAR_COMPLETED:
      return todos.filter(t => !t.get('completed'))
  }

  return todos
}

export default TodoReducer
