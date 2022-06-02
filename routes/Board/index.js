const express = require('express');
const router = express.Router();

router.use('/boardList', require('./boardList'));
router.use('/boardAdd', require('./boardAdd'));

module.exports = router;