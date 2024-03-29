/*****************************************************
 * Description:   Defines routes for the game portal
 * Version:   2.1   
*****************************************************/
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

/*****************************************************
 * Description:  defines get route for game #1
 * Version:   2.1   
*****************************************************/
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

/*****************************************************
 * Description:  defines get route for game #2
 * Version:   2.1   
*****************************************************/
router.get('/2', function(req, res) {
    // check if user session is active, if not redirect to login page
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            session.gameState = null;
            // render the ejs page
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

/*****************************************************
 * Description:  defines get route for game #3
 * Version:   2.1   
*****************************************************/
router.get('/3', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            session.gameState = null;
            res.render('games/game3.ejs', {
                acvac: '', acvab: '', acvt4t: '', acvgr: '', acvhm: '', acTotal: '',
                abvac: '', abvab: '', abvt4t: '', abvgr: '', abvhm: '', abTotal: '',
                t4tvac: '', t4tvab: '', t4tvt4t: '', t4tvgr: '', t4tvhm: '', t4tTotal: '',
                grvac: '', grvab: '', grvt4t: '', grvgr: '', grvhm: '', grTotal: '',
                hmvac: '', hmvab: '', hmvt4t: '', hmvgr: '', hmvhm: '', hmTotal: '', g3Summary: ''
        });
        } else {

        }
    }
});

/*****************************************************
 * Description:  defines post route for game #1 (single play game)
 * Version:   3.5   
*****************************************************/
router.post('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP'){
            // the game is only avialable for experimental group participant
            const submitVal = req.body.submit;
            let opponentPlay = Math.floor(Math.random() * 10);  // select random play

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

/*****************************************************
 * Description:  defines post route for game #2 (multi play game)
 * Version:   3.5   
*****************************************************/
router.post('/2', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP') {
            // game is only avialable for experimental group participant
            let game = null;
            let gameSummary = '';
            const submitVal = req.body.submit2;  // player's submitted play
            const opponentStrats = ['Always Cooperate', 'Always Betray', 'Tit4Tat', 'Grudger', 'Hard Majority'];    // all game strategies avialable
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
            
            // depending on strategy, call the Game object's corresponding function
            if (game.p2strategy == 'Always Cooperate') game.playAlwaysCooperate(submitVal);
            else if (game.p2strategy == 'Always Betray') game.playAlwaysBetray(submitVal);
            else if (game.p2strategy == 'Tit4Tat') game.playTit4Tat(submitVal);
            else if (game.p2strategy == 'Grudger') game.playGrudger(submitVal);
            else if (game.p2strategy == 'Hard Majority') game.playHardMajority(submitVal);

            // save the game state into a session object
            session.gameState = game;
            
            // render the ejs page with the updated scores
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

/*****************************************************
 * Description:  defines post route for game #3 (multi play automation)
 * Version:   3.5   
*****************************************************/
router.post('/3', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {  
        if (session.usertype == 'EXP') {
            let rounds = req.body.rounds;
            let game = new Game();

            let acvac = game.playMultiAlwaysCooperate(rounds, 'Always Cooperate');
            let acvab = game.playMultiAlwaysBetray(rounds, 'Always Cooperate');
            let acvt4t = game.playMultiTit4Tat(rounds, 'Always Cooperate');
            let acvgr = game.playMultiGrudger(rounds, 'Always Cooperate');
            let acvhm = game.playMultiHardMajority(rounds, 'Always Cooperate');
           

            let abvac = game.playMultiAlwaysCooperate(rounds, 'Always Betray');
            let abvab = game.playMultiAlwaysBetray(rounds, 'Always Betray');
            let abvt4t = game.playMultiTit4Tat(rounds, 'Always Betray');
            let abvgr = game.playMultiGrudger(rounds, 'Always Betray');
            let abvhm = game.playMultiHardMajority(rounds, 'Always Betray');
            
            let t4tvac = game.playMultiAlwaysCooperate(rounds, 'Tit4Tat');
            let t4tvab = game.playMultiAlwaysBetray(rounds, 'Tit4Tat');
            let t4tvt4t = game.playMultiTit4Tat(rounds, 'Tit4Tat');
            let t4tvgr = game.playMultiGrudger(rounds, 'Tit4Tat');
            let t4tvhm = game.playMultiHardMajority(rounds, 'Tit4Tat');
           
            let grvac = game.playMultiAlwaysCooperate(rounds, 'Grudger');
            let grvab = game.playMultiAlwaysBetray(rounds, 'Grudger');
            let grvt4t = game.playMultiTit4Tat(rounds, 'Grudger');
            let grvgr = game.playMultiGrudger(rounds, 'Grudger');
            let grvhm = game.playMultiHardMajority(rounds, 'Grudger');
            
            let hmvac = game.playMultiAlwaysCooperate(rounds, 'Hard Majority');
            let hmvab = game.playMultiAlwaysBetray(rounds, 'Hard Majority');
            let hmvt4t = game.playMultiTit4Tat(rounds, 'Hard Majority');
            let hmvgr = game.playMultiGrudger(rounds, 'Hard Majority');
            let hmvhm = game.playMultiHardMajority(rounds, 'Hard Majority');
           
            acTotal = acvac + acvab + acvt4t + acvgr + acvhm;
            abTotal = abvac + abvab + abvt4t + abvgr + abvhm;
            t4tTotal = t4tvac + t4tvab + t4tvt4t + t4tvgr + t4tvhm;
            grTotal = grvac + grvab + grvt4t + grvgr + grvhm;
            hmTotal = hmvac + hmvab + hmvt4t + hmvgr + hmvhm;

            let game3Summary = 'Always defect is no longer a dominant strategy, since adaptive strategies are able to adjust to opponent plays over multiple rounds.  Tit-4-Tat is a good adaptive strategy since it is quick to punish betrayal but it is also quick to reward cooperation.'
            res.render('games/game3.ejs', {
                acvac: acvac, acvab: acvab, acvt4t: acvt4t, acvgr: acvgr, acvhm: acvhm, acTotal: acTotal,
                abvac: abvac, abvab: abvab, abvt4t: abvt4t, abvgr: abvgr, abvhm: abvhm, abTotal: abTotal,
                t4tvac: t4tvac, t4tvab: t4tvab, t4tvt4t: t4tvt4t, t4tvgr: t4tvgr, t4tvhm: t4tvhm, t4tTotal: t4tTotal,
                grvac: grvac, grvab: grvab, grvt4t: grvt4t, grvgr: grvgr, grvhm: grvhm, grTotal: grTotal,
                hmvac: hmvac, hmvab: hmvab, hmvt4t: hmvt4t, hmvgr: hmvgr, hmvhm: hmvhm, hmTotal: hmTotal,
                g3Summary: game3Summary
        });

        }
    }
});

module.exports = router;