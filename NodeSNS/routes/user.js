const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');
const router = express.Router();

router.post('/');

router.post('/signUp', async(req, res, next) => {
    try{
        const hash = await bcrypt.hash(req.body.password, 10);
        const isUser = await db.User.findOne({
            where:{
                email: req.body.email,
            },
        });

        if(isUser) {
            return res.status(403).json({
                errorCode:1,
                message: '이미 회원가입 되어있습니다.'
            })
        }

        const newUser = await db.User.create({
            email: req.body.email,
            password: hash,
            nickname: req.body.nickname,
        });

        // HTTP STATUS CODE
        passport.authenticate('local', (err, user, info) => {
            if(err) {
                console.error(err);
                return next(err);
            } 
            if(info) {
                return res.status(401).send(info.reason);
            }
            return req.login(user, async (err)=>{ // 세션에다 사용자 정보 저장 (어떻게? > SereializeUser)
                if(err) {
                    console.error(err);
                    return next(err);
                }
                return res.json(user);  // body 값에 user 값을 저장
            });
        })(req, res. next);
    } catch(err) {
        console.error(err);
        return next(err);
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            console.error(err);
            return next(err);
        } 
        if(info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (err)=>{ // 세션에다 사용자 정보 저장 (어떻게? > SereializeUser)
            if(err) {
                console.error(err);
                return next(err);
            }
            return res.json(user);  // body 값에 user 값을 저장
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    if(req.isAuthenticated()){
        req.logout();
        req.session.destroy();  // 선택사항
        return res.status(200).send('로그아웃 되었습니다.');
    }
});

module.exports = router;