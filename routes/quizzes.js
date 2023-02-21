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
        
    } 
});

router.get('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {
        res.render('quizzes/quiz1.ejs', {
            q1ErrorMessage: ''
        });
    }
});


router.get('/2', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {
        res.render('quizzes/quiz2.ejs', {
            q2ErrorMessage: ''
        });
    }
}); 

router.post('/1', function(req,res) {
    let participant = new Participant();
    
    if (req.body.q1 == null || req.body.q2 == null || req.body.q3 == null || req.body.q4 == null || 
        req.body.q5 == null || req.body.q6 == null || req.body.q7 == null || req.body.q8 == null) {
            res.render('quizzes/quiz1.ejs', {
                q1ErrorMessage: 'Missing or Invalid responses'
            });
    } else {
        let quiz1Responses = [];
        quiz1Responses.push(req.body.q1);
        quiz1Responses.push(req.body.q2);
        quiz1Responses.push(req.body.q3);
        quiz1Responses.push(req.body.q4);
        quiz1Responses.push(req.body.q5);
        quiz1Responses.push(req.body.q6);
        quiz1Responses.push(req.body.q7);
        quiz1Responses.push(req.body.q8);

        participant.quizPreTest = quiz1Responses;
        const filter = { _id : session.userid };
        const update = { quizPreTest : quiz1Responses } ;
        console.log(filter);
        console.log(update);
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
        res.redirect('../tutorials/2');
    }
});

router.post('/2', function(req,res) {
    let participant = new Participant();
    
    if (req.body.q1 == null || req.body.q2 == null || req.body.q3 == null || req.body.q4 == null || 
        req.body.q5 == null || req.body.q6 == null || req.body.q7 == null || req.body.q8 == null) {
            res.render('quizzes/quiz2.ejs', {
                q1ErrorMessage: 'Missing or Invalid responses'
            });
    } else {
        let quiz2Responses = [];
        quiz2Responses.push(req.body.q1);
        quiz2Responses.push(req.body.q2);
        quiz2Responses.push(req.body.q3);
        quiz2Responses.push(req.body.q4);
        quiz2Responses.push(req.body.q5);
        quiz2Responses.push(req.body.q6);
        quiz2Responses.push(req.body.q7);
        quiz2Responses.push(req.body.q8);

        participant.quizPostTest = quiz2Responses;
        const filter = { _id : session.userid };
        const update = { quizPostTest : quiz2Responses } ;
        console.log(filter);
        console.log(update);
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
        res.redirect('../questionnaires');
    }
});

module.exports = router;