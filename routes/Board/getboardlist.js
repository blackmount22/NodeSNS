const express = require('express');
const router = express.Router();

const {getBoardList} = require('../../model/board')

router.get('/', async function(req, res, next) {
    let result = await getBoardList();

    console.log(1);
    console.log(result);
    res.send(result);
})

module.exports=router;