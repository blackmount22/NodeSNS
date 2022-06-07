const express = require('express');
const router = express.Router();

const getUserList = require('../../model/user');

router.get('/', function(req, res, next){
    console.log("fff"+getUserList);
    let result = getUserList;
    // const result = new Promise((resolve, reject)=>{
    //     resolve('Success');
    // })
    // result
    //     .then(function(data){
    //         console.log('result: ', result)
    //     })
    //     .catch(function(reason){
    //         console.log('failed', reason)
    //     })
    // console.log('userList : '+ result);
    console.log("result: ",result);
    res.send('get User List!!!!!!!!'+result.USR_ID);
})


module.exports=router;