import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getProfile } from '../apiClient'
import { connect } from "react-redux"

import { login, logout } from "../helpers/login"

function Profile(props) {
  const { dispatch } = props
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
      <Link to="/teacher" onClick={() => { logout(dispatch) }}>Logout</Link>

      {user && <div>
          <h3>{user.firstname + ' ' + user.lastname}</h3>
          <p>{user.email}</p>
        </div>
      }
    </Fragment>
  )
}

function mapStateToProps(state) {
  return {
      login: state.login
  }
}

export default connect(mapStateToProps)(Profile)