const express= require('express');
const router = express.Router();

router.use('/getuserlist', require('./getuserlist'));
// router.use('/getAddUser', require('./addboard'));
console.log("user mvc!!!!!!!!!!!1");
module.exports = router;