const exerciseRouter = require('express').Router()

const ExerciseApi= require('../api/exercise-api.js')
const HttpUtils = require('../utils/http-utils.js')
const { BadRequest } = require('../utils/error-utils.js')
const log = require('../utils/logger.js')

// GET routes
exerciseRouter.get('/', (req, res) => {
	ExerciseApi
		.getExercise()
		.then(exercise => HttpUtils.sendResponse(res, exercise, 200))
})


// POST routes
exerciseRouter.post('/', (req, res) => {
	log.info('here')
	ExerciseApi
		.createExercise()
		.then(() => HttpUtils.sendResponse(res))
})

exerciseRouter.post('/rep', (req, res) => {
	ExerciseApi
		.addRep()
		.then(() => HttpUtils.sendResponse(res, {}, 201))
})

exerciseRouter.post('/set', (req, res) => {
    const { weight } = req.body
    if (!weight) {
        return HttpUtils.sendErrorResponse(res, new BadRequest('`weight` is a required field.'))
    }
    log.info('rep counted', weight)
    return HttpUtils.sendResponse(res, {}, 201)
})

module.exports = exerciseRouter
