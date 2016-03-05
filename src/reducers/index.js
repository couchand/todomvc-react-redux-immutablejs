import { List, Record } from 'immutable'
import TodoReducer from './todo'
import FilterReducer from './filter'
import RoutingReducer from './routing'
import { SHOW_ALL } from '../constants/filter-types'

const State = Record({
  todos: List(),
  filter: SHOW_ALL,

  // for react-router
  routing: undefined
})

function rootReducer(state = State(), action) {
  return State({
    todos: TodoReducer(state.get('todos'), action),
    filter: FilterReducer(state.get('filter'), action),

    routing: RoutingReducer(state.get('routing'), action)
  })
}

export default rootReducer
