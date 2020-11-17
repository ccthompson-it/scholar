const path = require('path')
const express = require('express')

const classRoutes = require('./routes/classes')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/classes', classRoutes)

module.exports = server
