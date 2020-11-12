import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <h1>Scholar Mun</h1>
        <Link to='/profile'>Teacher</Link>
        <Link to='/student'>Student</Link>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
