const express= require('express');
const router = express.Router();

router.use('/getuserlist', require('./getuserlist'));
// router.use('/getAddUser', require('./addboard'));
console.log("user mvc!!!!!!!!!!!");
module.exports = router;