import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { isAuthenticated } from 'authenticare/client'


class Teacher extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h1>Teacher Page!</h1>
        <Link to='/'>Home</Link>
        <p>
          {isAuthenticated() ? 'You are logged in!' : 'You are not logged in!'}
        </p>
        
      </Fragment>
    )
  }
}

export default Teacher