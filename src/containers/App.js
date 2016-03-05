import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { anyTodosSelector } from '../selectors'
import NewTodoInput from '../containers/NewTodoInput'
import MasterCheckbox from '../containers/MasterCheckbox'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoFooter from '../containers/TodoFooter'

const renderMain = () =>
  <section className="main">
    <MasterCheckbox />
    <VisibleTodoList />
  </section>

const renderFooter = () =>
  <TodoFooter />

const App = (props) =>
  <div>
    <header className="header">
      <h1>todos</h1>
      <NewTodoInput />
    </header>
    { props.anyTodos ? renderMain() : null }
    { props.anyTodos ? renderFooter() : null }
  </div>

App.propTypes = {
  anyTodos: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    anyTodos: anyTodosSelector(state)
  }
}

export default connect(mapStateToProps)(App)
