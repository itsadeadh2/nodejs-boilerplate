// Express
const express = require('express')
const routes = require('./routes')

// Init express app
const app = express()

// Routes
app.use('/', routes)

module.exports = app
