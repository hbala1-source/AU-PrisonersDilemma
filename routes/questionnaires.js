const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const router = express.Router();
const Participant = require('../models/participant');

router.get('/', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {
        res.render('questionnaires/questionnaire.ejs', {
            qesErrorMessage : ''
        });
    }
}); 

router.post('/', function(req, res) {
    if (req.body.q1 == null || req.body.q2 == null || req.body.q3 == null || req.body.q4 == null || 
        req.body.q5 == null || req.body.q6 == null || req.body.q7 == null || req.body.q8 == null) {
            res.render('questionnaires/questionnaire.ejs', {
                qesErrorMessage: 'Missing or Invalid responses'
            });
    }
    else {
        let questionnaireResponses = [];
        questionnaireResponses.push(req.body.q1);
        questionnaireResponses.push(req.body.q2);
        questionnaireResponses.push(req.body.q3);
        questionnaireResponses.push(req.body.q4);
        questionnaireResponses.push(req.body.q5);
        questionnaireResponses.push(req.body.q6);
        questionnaireResponses.push(req.body.q7);
        questionnaireResponses.push(req.body.q8);

        participant.questionnaire = questionnaireResponses;
        const filter = { _id : session.userid };
        const update = { 
            questionnaire : questionnaireResponses,
            completionStatus : true
         } ;
        
        async function updateParticipant() {
            try {
                participant = await Participant.findOneAndUpdate( filter, update, {
                    new: true
                })
                //console.log(participant);
            } catch(e) {
                console.log(e.message);
            }
        }
        updateParticipant();
        res.redirect('./completed');
    } 
});

module.exports = router;