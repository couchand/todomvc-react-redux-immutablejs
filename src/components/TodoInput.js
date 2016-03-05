import React, { Component, PropTypes } from 'react'
import { ENTER_KEY, ESCAPE_KEY } from '../constants/key-codes'

class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = this.getResetState()

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  getResetState() {
    return {
      title: this.props.defaultValue || ''
    }
  }

  handleKeyUp(e) {
    if (e.which === ENTER_KEY) {
      this.props.onChange(this.state.title)
      this.setState(this.getResetState())
    }

    if (e.which === ESCAPE_KEY) {
      this.props.onCancel()
      this.setState(this.getResetState())
    }
  }

  handleBlur() {
    this.props.onChange(this.state.title)
    this.setState(this.getResetState())
  }

  componentDidMount() {
    let len = this.state.title.length
    this.refs.input.setSelectionRange(len, len)
  }

  render() {
    return (
      <input
        ref="input"
        className="new-todo"
        placeholder="What needs to be done?"
        value={ this.state.title }
        onChange={ this.handleChange }
        onKeyUp={ this.handleKeyUp }
        onBlur={ this.handleBlur }
        autoFocus={ true } />
    )
  }
}

TodoInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}

export default TodoInput
