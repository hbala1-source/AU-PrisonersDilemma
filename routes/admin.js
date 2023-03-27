const express = require('express');
const session = require('express-session');
const router = express.Router();
const Participant = require('../models/participant');
const mongoose = require('mongoose');


router.get('/', function(req, res) {
    if (session.loggedin == true && session.usertype == 'admin') {
        res.render('admin/adminInput.ejs')
    } else {
        res.render('admin/admin.ejs');
    }
});

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

router.post('/input', function(req, res) {
    let pUsername = req.body.participantUsername;
    let pPassword = req.body.participantPassword;
    let pType = req.body.participantType;

    insertParticipant(pUsername, pPassword, pType);
    res.redirect('/admin');
});

async function insertParticipant(pUsername, pPassword, pType) {
    let participant = new Participant();
    participant.participantType = pType;
    participant.loginUsername = pUsername;
    participant.loginPassword = pPassword;
    participant.completionStatus = false;
    participant.startTime = null;
    participant.endTime = null;
    try {
        await participant.save();
        console.log(participant);
    } catch(e) {
        console.log(e.message);
    }
}

async function findParticipant() {
    try {
        participant = await Participant.findById('63dedc5f9dd74bdce3418845');
        console.log(participant.loginUsername);
    } catch (e) {
        console.log(e.message);
    }
} 
//findParticipant();
//insertParticipant();


module.exports = router;