const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

const {addBoard} = require('../../model/board');
// const { response } = require('express');

router.post('/', (req,res) => {
    let title = req.body.title;
    let content = req.body.content;

    let result = addBoard(title, content);
    console.log("결과:" + result);
});


module.exports = router;
