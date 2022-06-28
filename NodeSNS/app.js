const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

const routes = require('./routes');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

db.sequelize.sync();

// CORS 미들웨어 추가
app.use(cors('http://localhost:3000')); 
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req,res) => {
    res.status(200).send('Server ON');
});

// 라우팅
//app.use('/', routes);

app.post('/board/addboard', async (req, res, next) => {
    try {
        console.log(req.body);
        var moment = require('moment');
        var curDate = moment().toDate();

        const newBoard = await db.Board.create({
            content: req.body.content,
            regID : 'kmmun',
            regDate: curDate,
        });

        return res.status(201).json(newBoard);
    } catch(err){
        console.error(err);
        return next(err);
    }
})


app.listen(5500, () => {
    console.log('Connected 5500 PORT!')
});

