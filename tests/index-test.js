const DBMock = require('sequelize-mock')
const Database = require('../models/database.js')

// Root before hook
before(() => {
    Database.connect(DBMock)
})