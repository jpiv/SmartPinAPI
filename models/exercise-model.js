const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const ExerciseSchema = new mongoose.Schema({
	exerciseType: {
		type: String,
		required: true,
	},
	sets:{
		type: [{ reps: Number, weight: Number }],
		default: [],
	}
})
const ExerciseModel = mongoose.model('Exercise', ExerciseSchema)

module.exports = ExerciseModel
