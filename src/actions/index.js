import {
  ADD_TODO, SAVE_TODO,
  TOGGLE_TODO, DESTROY_TODO,
  TOGGLE_ALL, CLEAR_COMPLETED
} from '../constants/action-types'

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: { title }
  }
}

export function saveTodo(id, title) {
  return {
    type: SAVE_TODO,
    payload: { id, title }
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  }
}

export function destroyTodo(id) {
  return {
    type: DESTROY_TODO,
    payload: { id }
  }
}

export function toggleAll() {
  return {
    type: TOGGLE_ALL
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}
