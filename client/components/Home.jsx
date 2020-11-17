import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(props) {
  return (
    <div>
      <h1>Home Page!</h1>
      <Link to='/teacher'>Teacher</Link>
      <Link to='/student'>Student</Link>
    </div>
  )
}