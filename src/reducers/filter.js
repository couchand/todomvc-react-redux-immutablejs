import { SET_FILTER } from '../constants/action-types'
import { SHOW_ALL } from '../constants/filter-types'

function FilterReducer(filter = SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload
  }

  return filter
}

export default FilterReducer
