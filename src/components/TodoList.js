import React, { PropTypes } from 'react'
import { List } from 'immutable'
import Todo from './Todo'

const TodoList = (props) =>
  <ul className="todo-list">
    {
      props.todos.map(
        (todo, i) =>
          <Todo
            todo={ todo }
            key={ i }
            saveTodo={ props.saveTodo }
            toggleTodo={ props.toggleTodo }
            destroyTodo={ props.destroyTodo }
          />
      )
    }
  </ul>

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  saveTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  destroyTodo: PropTypes.func.isRequired
}

export default TodoList
