const pinRouter = require('express').Router()

const PinAPI = require('../api/pin-api.js')
const HttpUtils = require('../utils/http-utils.js')
const { BadRequest } = require('../utils/error-utils.js')
const log = require('../utils/logger.js')

// GET
pinRouter.get('/', (req, res) => {
	log.info('get /')
	return HttpUtils.sendResponse(res, { test: 'test' })
})

// POST
pinRouter.post('/reps', (req, res) => {
    const { weight } = req.body
    if (!weight) {
        return HttpUtils.sendErrorResponse(res, new BadRequest('`weight` is a required field.'))
    }
    log.info('rep counted', weight)
    return HttpUtils.sendResponse(res, {}, 201)
})

module.exports = pinRouter
