import { LOCATION_CHANGE } from 'react-router-redux'
import { SET_FILTER } from '../constants/action-types'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filter-types'

function setFilter(type) {
  return {
    type: SET_FILTER,
    payload: type
  }
}

export default store => next => action => {
  if (action.type !== LOCATION_CHANGE) {
    return next(action)
  }

  switch (action.payload.pathname) {
    case '/active':
      next(setFilter(SHOW_ACTIVE))
      break
    case '/completed':
      next(setFilter(SHOW_COMPLETED))
      break
    case '/':
      next(setFilter(SHOW_ALL))
      break
  }

  return next(action)
}
