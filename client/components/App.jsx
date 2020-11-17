import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Student from './Student'
import Teacher from './Teacher'
import NotFound from './NotFound'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teacher">
            <Teacher />
          </Route>
          <Route exact path="/student">
            <Student />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
