import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Page could not be found</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Home