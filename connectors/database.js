const mongoose = require('mongoose')
const log = require('../utils/logger.js')

const Database = {
    _DB: null,

    get DB() {
        if (!this._DB) {
            throw new Error('Cannot get the DB before connect has been called.')
        }
        return this._DB
    },

    connect(ORM=mongoose) {
        ORM.connect('mongodb://localhost/smart')
        this._DB = ORM.connection

        this._DB.on('connected', err => {
            if (err) {
                log.warn(err)
                return
            }
            log.info('Connected to database.')
        })

        return this._DB
    },
}

module.exports = Database
