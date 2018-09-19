const mongoose = require('mongoose')
const ExerciseSchema = new mongoose.Schema({
    sets:[{ reps: Number, weight: Number }]
})
const PinModel = mongoose.model('Pin', ExerciseSchema)

module.exports = PinModel
