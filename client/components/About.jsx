import React, {Component} from 'react'
import {connect} from 'react-redux'
import { changePage } from '../actions'

class About extends Component {

  handleButton = () => {
    let { dispatch } = this.props
    dispatch(changePage('home'))
  }

  render() {
    return (
      <div>
        <h1 className="title">This App Contains:</h1>
        <p>-> a few React components, linked through a redux store (App, Home and About)</p>
        <p>-> a redux action and reducer</p>
        <p>-> some basic styling</p>
        <p>-> a single, simple API endpoint (`/api/v1/quotes`)</p>
        <p>-> a knex database (with a seed)</p>
        <p>-> a database module (`db.js`)</p>
        <p>-> an API client module (`apiClient.js`)</p>
        <p>-> configuration for Jest and Enzyme (including JSDOM)</p>
        <p>-> configuration for server-side debugging in VS Code</p>
        <p>-> full testing for all of the above</p>
        <button onClick={this.handleButton}>Home</button>
      </div>
    )
  }
}


export default connect()(About)