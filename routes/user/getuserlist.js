const express = require('express');
const router = express.Router();

const user = require('../../model/user');

router.get('/', async function(req, res, next){
    let result = await user.getUserList();
    // console.log(user.getUserList());
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
    
})


module.exports=router;