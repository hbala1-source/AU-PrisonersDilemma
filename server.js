if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load
}
const express = require('express');     
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const http = require('http');
//const fs = require('fs');
const path = require('path');

const Participant = require('./models/participant');
const { userInfo } = require('os');

const app = express();  // create the express app
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname + '/public'));
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

// required for maintaining login session 
app.use(session({
    secret: "HJ7Gt21p998Nn7pmnop4",
    saveUninitialized:true,
    cookie: {maxAge: 86400000 },
    resave: false
}))

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { 
    useNewURLParser: true
});


// application routes
const indexRouter = require('./routes/index');
const tutorialRouter = require('./routes/tutorials');
const quizzRouter = require('./routes/quizzes');
const questionnaireRouter = require('./routes/questionnaires');
const gameRouter = require('./routes/games');
const adminRouter = require('./routes/admin');

app.use('/', indexRouter);
app.use('/tutorials', tutorialRouter);
app.use('/quizzes', quizzRouter);
app.use('/questionnaires', questionnaireRouter);
app.use('/games', gameRouter);
app.use('/admin', adminRouter);

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`listening on port ${port}`)
});