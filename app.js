const express = require('express');
const app = express();

// 기존코드
// const indexRouter = require('./routes/index');
// const boardRouter = require('./routes/board');
// const userRouter = require('./routes/user')

const routes = require('./routes');

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', routes);

// 기존코드
// app.use('/', indexRouter);
// app.use('/board', boardRouter);
// app.use('/user', userRouter);

// app.get('/board/addboard', (req, res) => {
//     res.render('board/addBoard.html');
// });


app.listen(3000, () => {
    console.log('Connected 3000 PORT!')
});

