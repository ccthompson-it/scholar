const express = require('express')

const db = require('../db/classes')

const router = express.Router()

router.get('/all-teachers', (req, res) => {
  db.getAllTeachers()
    .then(results => {
      res.json(results)
    })
    .catch(e => {
      console.log(e)
    })
})


module.exports = router
