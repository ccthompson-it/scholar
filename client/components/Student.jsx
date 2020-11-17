import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { getClasses } from '../apiClient'

export default function Student(props) {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    getClasses()
      .then(classes => {
        setClasses(classes)
      })
  }, [])
    

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