/*****************************************************
 * Description:   Defines routes for the administrator portal
 * Version:   2.1   
*****************************************************/
const express = require('express');
const session = require('express-session');
const router = express.Router();
const Participant = require('../models/participant');
const mongoose = require('mongoose');

/*****************************************************
 * Description:  Define detault get route
 * Version:   2.1   
*****************************************************/
router.get('/', function(req, res) {
    if (session.loggedin == true && session.usertype == 'admin') {
        res.render('admin/adminInput.ejs')
    } else {
        res.render('admin/admin.ejs');
    }
});

/*****************************************************
 * Description:  Define detault post route
 * Version:   2.1   
*****************************************************/
router.post('/', function(req, res) {
    let username = req.body.loginUsername;
    let password = req.body.loginPassword;

    if (username == process.env.ADM_USERNAME && password == process.env.ADM_PASSWORD) {
        session.usertype = 'admin';
        session.loggedin = true;
        res.redirect('/admin');
    } else {
        res.redirect('/');
    }
});

/*****************************************************
 * Description:  Define input route for inputting new user
 * Version:   2.1   
*****************************************************/
router.post('/input', function(req, res) {
    // get participant info from input boxes
    let pUsername = req.body.participantUsername;
    let pPassword = req.body.participantPassword;
    let pType = req.body.participantType;

    insertParticipant(pUsername, pPassword, pType);
    res.redirect('/admin');
});

/*****************************************************
 * Description: insert participant into the database
 * Input: username, password, tye
 * Output: none
 * Version: 2.1
 *****************************************************/
async function insertParticipant(pUsername, pPassword, pType) {
    // declare new participant object
    let participant = new Participant();
    // define particpant properties
    participant.participantType = pType;
    participant.loginUsername = pUsername;
    participant.loginPassword = pPassword;
    participant.completionStatus = false;
    participant.startTime = null;
    participant.endTime = null;
    try {
        await participant.save();   // save particpant schema
        console.log(participant);
    } catch(e) {
        console.log(e.message);
    }
}

/*****************************************************
 * Description: find participant by unique ID 
 * Input: none
 * Output: none
 * Version: 2.1
 *****************************************************/
async function findParticipant() {
    try {
        participant = await Participant.findById('63dedc5f9dd74bdce3418845');
        console.log(participant.loginUsername);
    } catch (e) {
        console.log(e.message);
    }
} 

module.exports = router;