import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { getClasses } from '../apiClient'


class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: []
    }
  }

  componentDidMount() {
    getClasses()
      .then(classes => {
        this.setState({ classes })
      })
  }

  render() {
    const { classes } = this.state

    return (
      <Fragment>
        <h1>Student Page!</h1>
        <Link to='/'>Home</Link>
        {classes.length > 0 && classes.map((classData, i) => (
          <div key={i}>
            <h3>{classData.class_name}</h3>
            <p>{classData.class_area}</p>
            <p>{classData.level}</p>
            <p>{classData.firstname}</p>
            <p>{classData.lastname}</p>
            <p>{classData.email}</p>
          </div>
        ))
        }
      </Fragment>
    )
  }
}

export default Student