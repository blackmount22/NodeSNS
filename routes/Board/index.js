const express= require('express');
const router = express.Router();

router.use('/getboardlist', require('./getboardlist'));
router.use('/addboard', require('./addboard'));

module.exports = router;