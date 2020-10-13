const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getQuotes
}

function getQuotes (db = connection) {
  return db('quotes').select()
}
