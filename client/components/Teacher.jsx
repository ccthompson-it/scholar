import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { register, isAuthenticated } from 'authenticare/client'

export default function Teacher(props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    register({
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <Fragment>
      <h1>Teacher Page!</h1>
      <Link to='/'>Home</Link>
      <p>
        {isAuthenticated() ? 'You are logged in!' : 'You are not logged in!'}
      </p>

      <input type="text" name="username" value={form.username} onChange={handleChange} />
      <input type="password" name="password" value={form.password} onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>

    </Fragment>
  )
}