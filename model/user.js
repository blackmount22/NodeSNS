var db_config = require('../config/database.js');

// db_config.connect(conn);

const getUserList = async function(){
    var conn = await db_config.init();
    var sql = 'SELECT * FROM USER';
    
    try{
        const result = await conn.execute(sql)
        // console.log(result[0]);
        return result[0];

    } catch(err) {
        console.log('query is not excuted. select fail...\n' + err);
    }
}

// const getUserList = function(){
//     var sql = 'SELECT * FROM USER';
    
//     return new Promise = function(resolve, reject){
//     conn.query(sql, function(err, result, fields){
//         if(err){
//             reject(err);
//         }else{
//             resolve(result);
//         }
//     });
//     conn.end();
//    }
// }

module.exports = {
    getUserList
}