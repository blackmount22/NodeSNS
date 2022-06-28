// const res = require('express/lib/response');
// const getConnectionPool = require('../config/pool');

// const getUserList = async function(){

//     var conn = await getConnectionPool.getConnection();  // mysql에서 상속
//     var sql = 'SELECT * FROM USER';
    
//     try{
//         const [result] = await conn.query(sql);
//         return [result];

//     } catch(err) {
//         console.log('query is not excuted. select fail...\n' + err);
//     }
//     conn.release();
// }

// // const getUserList = function(){
// //     var sql = 'SELECT * FROM USER';
    
// //     return new Promise = function(resolve, reject){
// //     conn.query(sql, function(err, result, fields){
// //         if(err){
// //             reject(err);
// //         }else{
// //             resolve(result);
// //         }
// //     });
// //     conn.end();
// //    }
// // }

// module.exports = {
//     getUserList
// }