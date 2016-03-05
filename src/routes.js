import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

export default (
  <Route path="/" component={ App }>
    <Route path="/completed" />
    <Route path="/active" />
  </Route>
)
