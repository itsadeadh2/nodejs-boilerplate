// Express
let app = require('express')()
const routes = require('./routes')

// Routes
app.use('/', routes)

module.exports = app
