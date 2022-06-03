const express = require('express');
const router = express.Router();

const {addBoard} = require('../../model/board')

router.post('/', async (req,res,next) => {
    let result = await addBoard();
    console.log(result);
})

module.exports = router;