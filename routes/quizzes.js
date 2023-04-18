/*****************************************************
 * Description:   Defines default routes for quizzes 
 * Version:   1.3   
*****************************************************/
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const router = express.Router();
const Participant = require('../models/participant');

/*****************************************************
 * Description:   Defines default get route
 * Version:   1.3   
*****************************************************/
router.get('/', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        
    } 
});

/*****************************************************
 * Description:   Defines get route for 1st quiz
 * Version:   1.3   
*****************************************************/
router.get('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else  {
        res.render('quizzes/quiz1.ejs', {
            q1ErrorMessage: '',
            q1FeedbackMsg: '',
            q2FeedbackMsg: '',
            q3FeedbackMsg: '',
            q4FeedbackMsg: '',
            q5FeedbackMsg: '',
            q6FeedbackMsg: '',
            q7FeedbackMsg: '',
            q8FeedbackMsg: ''
        });
    } 
});

/*****************************************************
 * Description:   Defines get route for 2nd quiz
 * Version:   1.3   
*****************************************************/
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

/*****************************************************
 * Description:   Defines post route for 1st quiz
 * Version:   1.3   
*****************************************************/
router.post('/1', function(req,res) {
    let participant = new Participant();
    // check that all quesitons have been answered
    if (req.body.q1 == null || req.body.q2 == null || req.body.q3 == null || req.body.q4 == null || 
        req.body.q5 == null || req.body.q6 == null || req.body.q7 == null || req.body.q8 == null) {
            res.render('quizzes/quiz1.ejs', {
                q1ErrorMessage: 'Missing or Invalid responses',
                q1FeedbackMsg: '',
                q2FeedbackMsg: '',
                q3FeedbackMsg: '',
                q4FeedbackMsg: '',
                q5FeedbackMsg: '',
                q6FeedbackMsg: '',
                q7FeedbackMsg: '',
                q8FeedbackMsg: ''
            });
    } else {
        // define an array to save the quizzes
        let quiz1Responses = [];
        quiz1Responses.push(req.body.q1);
        quiz1Responses.push(req.body.q2);
        quiz1Responses.push(req.body.q3);
        quiz1Responses.push(req.body.q4);
        quiz1Responses.push(req.body.q5);
        quiz1Responses.push(req.body.q6);
        quiz1Responses.push(req.body.q7);
        quiz1Responses.push(req.body.q8);

        // store the quiz in the participant object
        participant.quizPreTest = quiz1Responses;
        const filter = { _id : session.userid };
        const update = { quizPreTest : quiz1Responses } ;

        // update participant function to save quiz
        async function updateParticipant() {
            try {
                participant = await Participant.findOneAndUpdate( filter, update, {
                    new: true
                })
            } catch(e) {
                console.log(e.message);
            }
        }
        updateParticipant();

        // feedback for experimental group particpant
        if (session.loggedin == true && session.usertype == 'EXP') {

            let quiz1Key = ['d', 'a', 'c', 'a', 'a', 'b', 'b', 'b'];
            let q1Feedback='', q2Feedback='', q3Feedback='', q4Feedback='', q5Feedback='', q6Feedback='', q7Feedback='', q8Feedback='';

            if (req.body.q1 == quiz1Key[0]) q1Feedback = 'Correct!';
            else q1Feedback = 'Incorrect: Game theory was pioneered in the 1940s by mathematician John von Neumann and economist Oskar Morgenstern';
            
            if (req.body.q2 == quiz1Key[1]) q2Feedback = 'Correct!';
            else q2Feedback = 'Incorrect: A game in normal-form is often depicted in a table or matrix.  Normal form games are often played simultaneously and have perfect-information, so the players, payoff, numbers of plays, and strategies are known in advance';

            if (req.body.q3 == quiz1Key[2]) q3Feedback = 'Correct!';
            else q3Feedback = 'Incorrect: Rational choice theory in game theory assumes that it has like-minded rational players who desire specific outcomes, attempt to choose the most optimal outcome, incorporate uncertainty in their decisions and calculate their probabilistic outcomes of every action';

            if (req.body.q4 == quiz1Key[3]) q4Feedback = 'Correct!';
            else q4Feedback = 'Incorrect: Rational agents selecting independently tend to choose the option which is best for themselves, however in decisions made under collective rationality will favour the option which is mutually beneficial for all parties';

            if (req.body.q5 == quiz1Key[4]) q5Feedback = 'Correct!';
            else q5Feedback = 'Incorrect: The most favourable outcome for both players is for both to remain silent since it results in the lowest mutually beneficial prison sentence for both.  If the player is concerned with their own best outcome, they would confess regardless of the opponent’s choice';

            if (req.body.q6 == quiz1Key[5]) q6Feedback = 'Correct!';
            else q6Feedback = 'Incorrect: the behaviour of cartles is where all members of the cartel cap price or production in order to ensure they can all be profitable.  If any member attempts to increase their production, then all members would increase production in response, causing the price to drop from oversaturation of the product.';

            if (req.body.q7 == quiz1Key[6]) q7Feedback = 'Correct!';
            else q7Feedback = 'Incorrect: The dominant strategy is the best strategy available to play regardless of the opponent may play';

            if (req.body.q8 == quiz1Key[7]) q8Feedback = 'Correct!';
            else q8Feedback = 'Incorrect: Nash equilibrium occurs when both players arrive at an optimal strategy such that they have nothing further to gain by changing their strategy regardless of the opponent’s choice of play';

            res.render('quizzes/quiz1.ejs', {
                q1ErrorMessage: '',
                q1FeedbackMsg: q1Feedback,
                q2FeedbackMsg: q2Feedback,
                q3FeedbackMsg: q3Feedback,
                q4FeedbackMsg: q4Feedback,
                q5FeedbackMsg: q5Feedback,
                q6FeedbackMsg: q6Feedback,
                q7FeedbackMsg: q7Feedback,
                q8FeedbackMsg: q8Feedback
            });
        }
        else if (session.loggedin == true && session.usertype == 'CTRL') {
            res.redirect('../tutorials/2');
        }
    }
});

/*****************************************************
 * Description:   Defines get route for 2nd quiz
 * Version:   1.3   
*****************************************************/
router.post('/2', function(req,res) {
    let participant = new Participant();
    
    // check that all quiz questions have been answered
    if (req.body.q1 == null || req.body.q2 == null || req.body.q3 == null || req.body.q4 == null || 
        req.body.q5 == null || req.body.q6 == null || req.body.q7 == null || req.body.q8 == null) {
            res.render('quizzes/quiz2.ejs', {
                q1ErrorMessage: 'Missing or Invalid responses'
            });
    } else {
        // create array to store answers
        let date = new Date();
        let quiz2Responses = [];
        quiz2Responses.push(req.body.q1);
        quiz2Responses.push(req.body.q2);
        quiz2Responses.push(req.body.q3);
        quiz2Responses.push(req.body.q4);
        quiz2Responses.push(req.body.q5);
        quiz2Responses.push(req.body.q6);
        quiz2Responses.push(req.body.q7);
        quiz2Responses.push(req.body.q8);

        // store quiz answers into participant object
        participant.quizPostTest = quiz2Responses;
        const filter = { _id : session.userid };
        const update = { quizPostTest : quiz2Responses, endTime: date } ;
        console.log(filter);
        console.log(update);
        
        // define function to update participant quiz answers
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
        res.redirect('../questionnaires');  // redirect to final questionnaire 
    }
});

module.exports = router;