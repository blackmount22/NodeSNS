const express = require('express');
const router = express.Router();

const {addBoard} = require('../../model/board')

router.post('/', async (req,res,next) => {
    let result = await addBoard();
    // res.render('board/addBoard.html');
    console.log(result);
})
router.get('/', (req, res) => {
    res.render('board/addBoard.html');
});
module.exports = router;