import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filter-types'

export const todosSelector = state => state.get('todos')
export const filterSelector = state => state.get('filter')

export const visibleTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos

      case SHOW_COMPLETED:
        return todos.filter(t => t.get('completed'))

      case SHOW_ACTIVE:
        return todos.filter(t => !t.get('completed'))
    }
  }
)

export const anyTodosSelector = createSelector(
  todosSelector,
  (todos) => todos.size > 0
)

export const todoCountSelector = createSelector(
  todosSelector,
  (todos) => todos.filter(t => !t.get('completed')).size
)

export const anyCompletedSelector = createSelector(
  todosSelector,
  (todos) => todos.some(todo => todo.get('completed'))
)

export const allCompletedSelector = createSelector(
  todosSelector,
  (todos) => todos.size > 0 && todos.every(todo => todo.get('completed'))
)

export const routingSelector = state => state.get('routing').toJS()
