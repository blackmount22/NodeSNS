const express = require('express');
const router = express.Router();

const {getBoardList} = require('../../model/board')

router.get('/', async function(req, res, next) {
    let result = await getBoardList();
    console.log(result);
    //console.log("get board list");
})

module.exports=router;