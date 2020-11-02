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
    console.log(tempQuotes)
    this.setState({ quotes: tempQuotes.map(quote => {return quote.class_name}) })
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

        {quotes && quotes.map((className, i) => <p key={i}>{className}</p>)}

        <button onClick={this.handleButton}>About</button>
      </div>
    )
  }
}


export default connect()(Home)