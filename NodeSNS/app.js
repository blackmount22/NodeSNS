const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

const routes = require('./routes');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

db.sequelize.sync();

// let corsOption = {
//     origin: 'http://127.0.0.1:5500', // 허락하는 요청 주소
//     credentials: true // true하면 프론트에 쿠키를 공유할수있게된다.
// } 

// CORS 미들웨어 추가
app.use(cors('http://localhost:3000')); 

app.get('/', (req,res) => {
    res.status(200).send('Server ON');
});

// 라우팅
app.use('/', routes);

app.listen(5500, () => {
    console.log('Connected 5500 PORT!')
});

