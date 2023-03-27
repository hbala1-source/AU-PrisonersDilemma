const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const router = express.Router();
const Game = require('../models/game');

router.get('/', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            res.render('games/game.ejs', {
                p1round1move: '', 
                round1result: '',
                p2round1move: ''
            })        
        } else {
            
        }
    } 
});

router.get('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            res.render('games/game1.ejs', {
                p1round1move: "", 
                round1result: "",
                p2round1move: ""
            })        
        } else {
            
        }
    } 
});

router.get('/2', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            session.gameState = null;
            res.render('games/game2.ejs', {
                p1r1select: '', p1r1score: '', p2r1select: '', p2r1score: '', 
                p1r2select: '', p1r2score: '', p2r2select: '', p2r2score: '', 
                p1r3select: '', p1r3score: '', p2r3select: '', p2r3score: '', 
                p1r4select: '', p1r4score: '', p2r4select: '', p2r4score: '', 
                p1r5select: '', p1r5score: '', p2r5select: '', p2r5score: '',
                p1totalscore: '', p2totalscore: '', gamesummary: ''
            });
        } else {
            
        }
    } 
});

router.get('/3', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        res.render('games/game3.ejs');
    }
});


router.post('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            const submitVal = req.body.submit;
            let opponentPlay = Math.floor(Math.random() * 10);

            //console.log(submit);
            if (submitVal == 'Cooperate') {
                
                if (opponentPlay % 2 == 0) {
                    // opponent cooperates
                    res.render('games/game1.ejs', {
                        p1round1move: "Cooperate", 
                        round1result: "Thats great! You trusted your accomplice and they chose to cooperate also... It paid off, you will each receive a light 1 year jail sentence",
                        p2round1move: "Cooperate"
                    });        
                } else {
                    // opponent betrays
                    res.render('games/game1.ejs', {
                        p1round1move: "Cooperate", 
                        round1result: "Uh oh!  You chose to cooperate but your accomplice has betrayed you. It didnt pay off since you will spend 3 years in jail, while they get off free",
                        p2round1move: "Betray"
                    });
                }

            } else if (submitVal == 'Betray') {
                 if (opponentPlay % 2 == 0) {
                    // opponent cooperates
                    res.render('games/game1.ejs', {
                        p1round1move: "Betray", 
                        round1result: "Hmm, you chose to betray your accomplice while they wanted to cooperate. But it worked out in your favour since you get off free, while they spend 3 years in jail",
                        p2round1move: "Cooperate"
                    });        
                } else {
                    // opponent betrays
                    res.render('games/game1.ejs', {
                        p1round1move: "Betray", 
                        round1result: "Ah! so, you chose to protect your own interests by betraying and it payed off since your accomplice also betrayed! You both will get 2 years in jail.",
                        p2round1move: "Betray"
                    });
                }
            } 
        } 
    } 
});

router.post('/2', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP') {
            let game = null;
            let gameSummary = '';
            const submitVal = req.body.submit2;
            const opponentStrats = ['Always Cooperate', 'Always Betray', 'Tit4Tat', 'Grudger', 'Hard Majority'];
            const opponentPlay = Math.floor(Math.random() * opponentStrats.length);
            
            if (session.gameState == null) {
                game = new Game();
                //game.p2strategy = opponentStrats[opponentPlay];
                game.p2strategy = 'Hard Majority';
                game.totalRounds = 5;
                game.round = 0;
            } else {
                game = session.gameState;
                game.round += 1;   
            }
            
            if (game.p2strategy == 'Always Cooperate') game.playAlwaysCooperate(submitVal);
            else if (game.p2strategy == 'Always Betray') game.playAlwaysBetray(submitVal);
            else if (game.p2strategy == 'Tit4Tat') game.playTit4Tat(submitVal);
            else if (game.p2strategy == 'Grudger') game.playGrudger(submitVal);
            else if (game.p2strategy == 'Hard Majority') game.playHardMajority(submitVal);

            // save the game state into a session object
            session.gameState = game;
            

            res.render('games/game2.ejs', {
                p1r1score: game.p1Scores[0], 
                p2r1score: game.p2Scores[0], 
                p1r1select: game.p1Plays[0], 
                p2r1select: game.p2Plays[0],
                p1r2score: game.p1Scores[1],
                p2r2score: game.p2Scores[1], 
                p1r2select: game.p1Plays[1], 
                p2r2select: game.p2Plays[1],
                p1r3score: game.p1Scores[2], 
                p2r3score: game.p2Scores[2], 
                p1r3select: game.p1Plays[2], 
                p2r3select: game.p2Plays[2],
                p1r4score: game.p1Scores[3], 
                p2r4score: game.p2Scores[3], 
                p1r4select: game.p1Plays[3], 
                p2r4select: game.p2Plays[3],
                p1r5score: game.p1Scores[4], 
                p2r5score: game.p2Scores[4], 
                p1r5select: game.p1Plays[4], 
                p2r5select: game.p2Plays[4],
                p1totalscore: game.getP1TotalScore(),
                p2totalscore: game.getP2TotalScore(),
                gamesummary: game.getGameSummary()
            });
        }
    }
});

router.post('/3', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP') {
            let game = new Game();
            
        }
    }
});

module.exports = router;