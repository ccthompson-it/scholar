import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { isAuthenticated } from 'authenticare/client'

export default function Teacher(props) {
  return (
    <Fragment>
      <h1>Teacher Page!</h1>
      <Link to='/'>Home</Link>
      <p>
        {isAuthenticated() ? 'You are logged in!' : 'You are not logged in!'}
      </p>

    </Fragment>
  )
}