const ExerciseModel = require('../models/exercise-model.js')
const { BadRequest } = require('../utils/error-utils.js')
const notify = require('../connectors/websockets.js')
const log = require('../utils/logger.js')

const ExerciseApi = {
	async getExercise() {
		const exerciseId = '5b9ed98f77168c27c18508e3'
		const exercise = await ExerciseModel.findOne({ _id: exerciseId})
		return exercise.toJSON()
	},

	async createExercise() {
		const exercise = new ExerciseModel({ exerciseType: 'test' })
		return exercise.save()
	},

	async addRep() {
		const exerciseId = '5b9ed98f77168c27c18508e3'
		const exercise = await ExerciseModel.findOne({ _id: exerciseId})
		const sets = exercise.get('sets', Array)
		exercise.set('sets.0.reps', sets[0].reps + 1)
		await exercise.save()
		notify.push('rep')
	}
}

module.exports = ExerciseApi
