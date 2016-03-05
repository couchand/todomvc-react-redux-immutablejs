import React, { PropTypes } from 'react'
import { Link, IndexLink } from './links'

const Footer = (props) =>
  <footer className="footer">
    <span className="todo-count"><strong>{ props.count }</strong> item{ props.count === 1 ? '' : 's' } left</span>
    <ul className="filters">
      <li>
        <IndexLink to="/">All</IndexLink>
      </li>
      <li>
        <Link to="/active">Active</Link>
      </li>
      <li>
        <Link to="/completed">Completed</Link>
      </li>
    </ul>
    { props.anyCompleted
      ? <button className="clear-completed" onClick={ props.clearCompleted }>Clear completed</button>
      : null }
  </footer>

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  anyCompleted: PropTypes.bool.isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default Footer
