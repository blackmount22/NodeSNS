const express = require('express');
const router = express.Router();

/* 설정 how? idea 필요 */
const userRouter = require('./user/index');
const boardRouter = require('./board/index');
router.use('/user', userRouter)
router.use('/board', boardRouter);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;