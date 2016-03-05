import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { allCompletedSelector } from '../selectors'
import { toggleAll } from '../actions'

const MasterCheckbox = (props) =>
  <div>
    <input className="toggle-all" type="checkbox" checked={ props.value } onChange={ props.onChange } />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </div>

MasterCheckbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

const allCompleted = (state) => {
  return {
    value: allCompletedSelector(state)
  }
}

export default connect(allCompleted, { onChange: toggleAll })(MasterCheckbox)
