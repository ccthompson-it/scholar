import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'
import { getQuotes } from '../apiClient'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }

  async componentDidMount() {
    let tempQuotes = await getQuotes()
    this.setState({ quotes: tempQuotes.quotes })
  }

  handleButton = () => {
    let { dispatch } = this.props
    dispatch(changePage('about'))
  }

  render() {
    let { quotes } = this.state
    return (
      <div>
        <h1 className="title">This is the Home Page!</h1>
        <p>I made myself a boilerplate because I was sick of not having one with everything on it.</p> 
        <br/>
        <p className="bold">Here are some movie quotes:</p>

        {quotes && quotes.map((quote, i) => <p key={i}>{quote}</p>)}

        <button onClick={this.handleButton}>About</button>
      </div>
    )
  }
}


export default connect()(Home)