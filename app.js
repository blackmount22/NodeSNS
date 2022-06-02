const express = require('express');
const app = express();

const boardRouter = require('./routes/Board/index.js');

app.use('/boared',boardRouter);

app.listen(3000, () => {
    console.log('Connected 3000 PORT!')
});

