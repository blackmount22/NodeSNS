const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../../models');

const app = express();

router.use(bodyParser.urlencoded({extended:true}));
// router.use(bodyParser.json());

// const {addBoard} = require('../../model/board');
// // const { response } = require('express');

// router.post('/', (req,res) => {
//     let title = req.body.title;
//     let content = req.body.content;

//     let result = addBoard(title, content);
//     res.render(result);
// });

app.post('/addboard', async (req, res, next) => {
    try {
        console.log("????????????????");
        var moment = require('moment');
        var curDate = moment().toDate();

        const newBoard = await db.Board.create({
            content: req.body.content,
            regId : req.body.id,
            regDate: moment,
        });

        return res.status(201).json(newBoard);
    } catch(err){
        console.error(err);
        return next(err);
    }
})


module.exports = router;
