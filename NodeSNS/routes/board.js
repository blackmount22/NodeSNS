const express = require('express');
const db = require('../models');
const router = require('./user');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads')
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + Date.now() + ext);
        }
    }),
    limit: {fileSize: 20 * 1024 * 1024},
});

// 글 추가
router.post('/addBoard', async(req, res, next) => {
    try{
        var moment = require('moment');
        var curDate = moment().toDate();
        
        const newBoard = await db.Board.create({
            content: req.body.content,
            regID: req.body.regID,
            regDate: curDate,
        });

        return res.status(201).json(newBoard);
    } catch(err) {
        console.error(err);
        return next(err);
    }
});

router.post('/images', upload.array('image'), (req, res) => {
    res.json(req.files.map(v=> v.filename));
})

router.post('/removeBoard', async(req, res, next) => {
    try{
        const delBoard = await db.Board.destroy({
            where:{
                boardNo: req.body.boardNo,
            },
        });

        if(delBoard) {
            return res.status(200).send('게시글이 삭제 되었습니다.');
        }

        return res.status(401).send('게시글 삭제 중 에러가 발생했습니다.');
    } catch(err) {
        console.error(err);
        return next(err);
    }
})

router.post('/getBoard', async(req, res, next) => {
    try{
        const boardList = await db.Board.findAll()

        if(boardList) {
            return res.status(201).json(boardList);
        }
    } catch(err) {
        console.error(err);
        return next(err);
    }
})

module.exports = router;