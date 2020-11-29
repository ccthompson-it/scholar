import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Profile(props) {
  return (
    <Fragment>
      <h1>Profile!</h1>
      <Link to='/teacher'>Sign Out</Link>
    </Fragment>
  )
} 