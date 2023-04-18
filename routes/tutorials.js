/*****************************************************
 * Description:   Defines default routes for tutorials
 * Version:   1.3   
*****************************************************/
const express = require('express');
const session = require('express-session');
const router = express.Router();

/*****************************************************
 * Description:  default get route for tutorial home
 * Version:   1.3   
*****************************************************/
router.get('/', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {
        res.render('tutorials/tutorial1.ejs');
    } 
});

/*****************************************************
 * Description:   Defines default routes for tutorial #1
 * Version:   1.3   
*****************************************************/
router.get('/1', function(req, res) {
    if (!session.loggedin) {
        req.session.destroy();
        res.redirect('/');
    } else {
        res.render('tutorials/tutorial1.ejs');
    } 
});

/*****************************************************
 * Description:   Defines default routes for tutorial #2
 * Version:   1.3   
*****************************************************/
router.get('/2', function(req, res) {
    if (session.usertype == 'CTRL') {
        res.render('tutorials/tutorial2.ejs');
    } else if (session.usertype == 'EXP') {
        res.redirect('/tutorials/3');
    }
});

/*****************************************************
 * Description:   Defines default routes for tutorial #3
 * Version:   1.3   
*****************************************************/
router.get('/3', function(req, res) {
    if (session.usertype == 'CTRL') {
        res.redirect('/tutorials/2');
    } else if (session.usertype == 'EXP') {
        res.render('tutorials/tutorial3.ejs');
    }
});

module.exports = router;