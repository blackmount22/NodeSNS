const express = require('express');
const app = express();

const indexRouter = require('./routes/index')
const boardRouter = require('./routes/board');

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', indexRouter);
app.use('/board', boardRouter);

app.get('/board/addboard', (req, res) => {
    res.render('board/addBoard.html');
});


app.listen(3000, () => {
    console.log('Connected 3000 PORT!')
});

