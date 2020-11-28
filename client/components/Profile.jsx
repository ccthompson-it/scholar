import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h1>Profile!</h1>
        <Link to='/teacher'>Sign Out</Link>
      </Fragment>
    )
  }
}

export default Profile