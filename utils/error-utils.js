class BadRequest extends Error {
    constructor(msg, ...params) {
        const errorMsg = `Bad Request: ${msg}`
        super(errorMsg, ...params)
    }
}

class NotFound extends Error {
    constructor(msg, ...params) {
        const errorMsg = `Not Found: ${msg}`
        super(errorMsg, ...params)
    }
}

const ErrorUtils = {
    BadRequest,
    NotFound,
}

module.exports = ErrorUtils
