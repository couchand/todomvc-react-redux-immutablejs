import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import { addTodo } from '../actions'

const ignoreState = state => { return {} }
const ignoreAction = () => {}
const actions = { onChange: addTodo, onCancel: ignoreAction }

const NewTodoInput = connect(ignoreState, actions)(TodoInput)

export default NewTodoInput
