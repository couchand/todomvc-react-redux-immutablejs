import React, { PropTypes } from 'react'
import { Link as RRLink, IndexLink as RRIndexLink } from 'react-router'

export const Link = (props) =>
  <RRLink {...props} activeClassName="selected" />

export const IndexLink = (props) =>
  <RRIndexLink {...props} activeClassName="selected" />
