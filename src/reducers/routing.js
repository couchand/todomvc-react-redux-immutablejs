import { Map } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = Map({
  locationBeforeTransitions: null
})

const RoutingReducer = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    })
  }

  return state
}

export default RoutingReducer
