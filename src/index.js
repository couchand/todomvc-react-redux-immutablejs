import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routingSelector } from './selectors'
import configureStore from './store'
import routes from './routes'
import Root from './containers/Root'

const renderApp = (initialState) => {
  let store = configureStore(initialState)
  let history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: routingSelector
  })
  
  return render(
    <Root store={ store } history={ history } routes={ routes } />,
    document.getElementById('todoapp')
  )
}

export default renderApp
