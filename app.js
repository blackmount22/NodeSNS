const cors = require('cors');
const express = require('express');
const app = express();

const routes = require('./routes');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let corsOption = {
    origin: 'http://127.0.0.1:5500', // 허락하는 요청 주소
    credentials: true // true하면 프론트에 쿠키를 공유할수있게된다.
} 

// CORS 미들웨어 추가
app.use(cors(corsOption)); 

// 라우팅
app.use('/', routes);

app.listen(5500, () => {
    console.log('Connected 5500 PORT!')
});

