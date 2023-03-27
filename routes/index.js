const { request } = require('express');
const express = require('express');
const session = require('express-session');
const Participant = require('../models/participant');

const router = express.Router();

router.get('/', function(req, res) {
    if (session.loggedin) {
        //res.render('./tutorials/tutorial1.ejs')
        res.redirect('tutorials/1');
    } else {
        res.render('index.ejs', {
            errorMessage: ''
        });
    }
});

router.get('/completed', function(req,res) {
    session.userid = null;
    session.usertype = null;
    session.loggedin = false;
    session.destroy;
    res.render('index.ejs', {
        errorMessage: 'Thank you for completing the learning module!!'
    });
});

router.post('/logout', function(req,res) {
    session.userid = null;
    session.usertype = null;
    session.loggedin = false;
    session.destroy;
    res.render('index.ejs', {
        errorMessage: 'Logged out'
    });
});



router.post('/', function(req, res) {
    let username = req.body.loginUsername;
    let password = req.body.loginPassword;
   
    if (username.trim().length == 0 || password.trim().length == 0) {
        res.render('index.ejs', {
            errorMessage: 'Missing username or password'
        });
    }
    else {
        let validate = '';
        return validateLogin(username, password).then(function(validate) {
            
            if (validate == 'authenticated') {
                //res.render('./tutorials/tutorial1.ejs')
                res.redirect('/tutorials/1');
            } else if (validate == 'failed') {
                res.render('index.ejs', {
                    errorMessage: 'Invalid username or password'
                });
            } else if (validate == 'completed') {
                res.render('index.ejs', {
                    errorMessage: 'You have already completed the module'
                });    
            } else if (validate == 'error') {
                res.render('index.ejs', {
                    errorMessage: 'Error logging into the system'
                });
            } else {
                
            }
        });
    }
});

async function validateLogin(username, password) {
    let retVal = '';
    let date = new Date();
    let filter = { 
        loginUsername: username, 
        loginPassword: password
    };
    let update = { startTime: date };

    let participant = new Participant();
    //participant.username = username;
    //participant.password = password;
    
    try {
        /* participant = await Participant.findOne({
            loginUsername: username,
            loginPassword: password
        });          */
        
        participant = await Participant.findOneAndUpdate( filter, update, {new: true} );
        
        if (participant != null) {
            if (participant.completionStatus == false) {
                session.userid = participant._id.toString();
                session.usertype = participant.participantType.toString();
                session.loggedin = true;
                retVal = 'authenticated';
            }
            else {
                retVal = 'completed';
            }
        } else {
            retVal = 'failed';
        } 
    } catch(e) {
        console.log(e.message);
        retVal = 'error';
    }
    
    
    return retVal;
}

module.exports = router;