import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

import { login, logout } from "../helpers/login"

function Teacher(props) {
  const { dispatch } = props
  return (
    <Fragment>
      <h1>Teacher Page!</h1>
      <Link to="/profile" onClick={() => { login(dispatch) }}>Login</Link> 
      <Link to='/'>Home</Link>
    </Fragment>
  )
} 

function mapStateToProps(state) {
  return {
      login: state.login
  }
}

export default connect(mapStateToProps)(Teacher)