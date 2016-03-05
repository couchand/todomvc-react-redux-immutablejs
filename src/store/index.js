import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import routingMiddleware from '../middleware/routing'

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(routingMiddleware)
  ) 


  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
