/*****************************************************
 * Description:   Defines the Participant Schema and its properties
 * Version:   1.0   
*****************************************************/
const mongoose = require('mongoose');
const participantSchema = new mongoose.Schema({
    participantType: String,
    loginUsername: String,
    loginPassword: String,
    completionStatus: Boolean,
    startTime: Date,
    endTime: Date,
    quizPreTest: [],
    quizPostTest: [],
    questionnaire: [] 
});

module.exports = mongoose.model('Participant', participantSchema);