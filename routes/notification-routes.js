const notificationRouter = require('express').Router()

const notify = require('../connectors/websockets.js')
const log = require('../utils/logger.js')

notificationRouter.ws('/', (ws, req) => {
	log.info('WebSocket connection made.')
	notify.connect(ws)
})

module.exports = notificationRouter
