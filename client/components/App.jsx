import React, {Component} from 'react'
import {connect} from 'react-redux'

import Home from './Home'

class App extends Component {

  render() {
    return (
      <h1>Scholar Mun</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
