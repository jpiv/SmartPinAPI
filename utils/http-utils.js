const log = require('./logger.js')
const ErrorUtils = require('./error-utils.js')

const HttpUtils = {
    sendResponse(res, json, status=200) {
        return res.status(status).json({
            data: json,
        })
    },

    sendErrorResponse(res, error) {
        let status = 500
        let message = error.toString()

        if (error instanceof ErrorUtils.BadRequest) {
            status = 400
        } else if (error instanceof ErrorUtils.NotFound) {
            status = 404
        } else {
            log.error(message)
            message = `An interal server error occured: ${message}`
        }
        return res.status(status).json({ error: message })
    },
}

module.exports = HttpUtils
