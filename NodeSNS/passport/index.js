const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    passport.serializeUser((user, done)=> {
        return done(null, user.id);
    });
    // 로그인 후 모든 요청에 해당 함수가 실행
    // 쿠키로 넘겨받은 값 분석 
    passport.deserializeUser(async(id, done)=>{
        try {
            const user = await db.User.findOne({where: {id}});
            return done(null, user);    // req.user 에 넣어준다, req.isAuthenticated() === true,
        } catch(err){
            console.log(err);
            return done(err);
        }
    });
    
    local();
};
