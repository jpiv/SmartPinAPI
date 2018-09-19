const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const ExerciseType = new mongoose.Schema({
	name: String,
})
const ExerciseTypeModel = mongoose.model('Exercise', ExerciseType)

module.exports = ExerciseTypeModel
