import { connect } from 'react-redux'
import { todoCountSelector, anyCompletedSelector } from '../selectors'
import Footer from '../components/Footer'
import { clearCompleted } from '../actions'

const countTodos = (state) => {
  return {
    count: todoCountSelector(state),
    anyCompleted: anyCompletedSelector(state)
  }
}

const actions = { clearCompleted }

const TodoFooter = connect(countTodos, actions)(Footer)

export default TodoFooter
