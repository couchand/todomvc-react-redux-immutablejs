import React, { Component, PropTypes } from 'react'
import TodoModel from '../models/todo'
import TodoInput from './TodoInput'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleDestroy = this.handleDestroy.bind(this)
  }

  handleChange(title) {
    this.setState({ editing: false })
    this.props.saveTodo(this.props.todo.id, title)
  }

  handleCancel() {
    this.setState({ editing: false })
  }

  handleDoubleClick() {
    this.setState({
      editing: true
    })
  }

  handleToggle() {
    this.props.toggleTodo(this.props.todo.id)
  }

  handleDestroy() {
    this.props.destroyTodo(this.props.todo.id)
  }

  render() {
    let todo = this.props.todo

    if (this.state.editing) {
      return (
        <li className={"editing" + (todo.completed ? ' completed' : '')}>
          <TodoInput defaultValue={ todo.title } onChange={ this.handleChange } onCancel={ this.handleCancel } />
        </li>
      )
    }

    return (
      <li className={ todo.completed ? 'completed' : '' }>
        <div className="view">
          <input className="toggle" type="checkbox" checked={ todo.completed } onChange={ this.handleToggle } />
          <label onDoubleClick={ this.handleDoubleClick }>{ todo.title }</label>
          <button className="destroy" onClick={ this.handleDestroy } />
        </div>
      </li>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.instanceOf(TodoModel).isRequired,
  saveTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  destroyTodo: PropTypes.func.isRequired
}

export default Todo
