const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

<<<<<<< HEAD
router.post('/', async (req,res,next) => {
    let result = await addBoard();
    res.render('board/addBoard.html');
    console.log(result);
})
router.get('/', (req, res) => {
    res.render('board/addBoard.html');
});
module.exports = router;
=======
const {addBoard} = require('../../model/board');
// const { response } = require('express');

router.post('/', (req,res) => {
    let title = req.body.title;
    let content = req.body.content;

    let result = addBoard(title, content);
    console.log("결과:" + result);
});


module.exports = router;
>>>>>>> origin/main
