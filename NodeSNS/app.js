const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require('express-session');
const cookie = require('cookie-parser');

const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

db.sequelize.sync();
passportConfig();

// CORS 미들웨어 추가
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookie('cookiesecret'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'cookiesecret',
    cookie: {
        httpOnly: true,
        secure : false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
    res.status(200).send('Server ON');
});

app.use('/user', userRouter);
app.use('/board', boardRouter);

app.listen(5500, () => {
    console.log('Connected 5500 PORT!')
});

