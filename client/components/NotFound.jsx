import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(props) {
  console.log('hit')
  return (
    <div>
      <h1>Page could not be found</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}