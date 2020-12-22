import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getProfile } from '../apiClient'

export default function Profile(props) {
  const [user, setUser] = useState({})

  useEffect(() => {
    getProfile()
      .then(profile => {
        setUser(profile)
      })
  }, [])

  console.log(user)

  return (
    <Fragment>
      <h1>Profile!</h1>
      <Link to='/teacher'>Sign Out</Link>

      {user && <div>
          <h3>{user.firstname + ' ' + user.lastname}</h3>
          <p>{user.email}</p>
        </div>
      }
    </Fragment>
  )
}