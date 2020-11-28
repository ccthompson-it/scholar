import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class Teacher extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h1>Teacher Page!</h1>
        <Link to='/profile'>Sign In</Link>
        <Link to='/'>Home</Link>
      </Fragment>
    )
  }
}

export default Teacher