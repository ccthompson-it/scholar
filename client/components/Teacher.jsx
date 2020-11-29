import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Teacher(props) {
  return (
    <Fragment>
      <h1>Teacher Page!</h1>
      <Link to='/profile'>Sign In</Link>
      <Link to='/'>Home</Link>
    </Fragment>
  )
} 