import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Home Page!</h1>
        <Link to='/teacher'>Teacher</Link>
        <Link to='/student'>Student</Link>
      </div>
    )
  }
}

export default Home