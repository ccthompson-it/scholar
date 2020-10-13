const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/quotes', (req, res) => {
  db.getQuotes()
    .then(results => {
      res.json({ quotes: results.map(quote => quote.quote) })
    })
    .catch(e => {
      console.log(e)
    })
})


module.exports = router
