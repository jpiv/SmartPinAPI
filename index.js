const express = require('express')
const app = express()
const expressWs = require('express-ws')(app)
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Establish a database connection
require('./connectors/database.js').connect()
const exerciseRoutes = require('./routes/exercise-routes.js')
const notificationRoutes = require('./routes/notification-routes.js')


// Add HTTP Logging middlware
app.use(morgan('combined'))

app.use(bodyParser.json())

app.use('/exercises', exerciseRoutes)
app.use('/notifications', notificationRoutes)

app.listen(8080)
