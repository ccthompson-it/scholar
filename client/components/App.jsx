import React, {Component} from 'react'
import {connect} from 'react-redux'

import Home from './Home'
import About from './About'

class App extends Component {

  render() {
    let { page } = this.props
    return (
      <div id='content'>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
