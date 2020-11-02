import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Home from './Home'

class App extends Component {

  render() {
    return (
      <Container>
        <h1>Scholar Mun</h1>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
