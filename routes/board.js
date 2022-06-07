const express = require('express');
const router = express.Router();

router.use('/', require('./board/index'));

module.exports = router;
