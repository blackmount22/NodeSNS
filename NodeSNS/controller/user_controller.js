const express = require('express');
const router = express.Router();
const userModel = require('../model/user');

const mainView = function(req, res){
    res.end('hello, World');
}

// // const 
// const getUserList = function(req,res){
//     userModel.getUserList
// }

module.exports =  {
    mainView
};