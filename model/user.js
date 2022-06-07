var db_config = require('../config/database.js');
var conn = db_config.init();

db_config.connect(conn);

// const getUserList = function(){
//     var sql = 'SELECT * FROM USER';
//     conn.query(sql, function(err, rows, fields){
//         if(err) console.log('query is not excuted. select fail...\n' + err);
//         else console.log(rows.length);
//         //return rows;
//     });
// }

const getUserList = function(){
    var sql = 'SELECT * FROM USER';
    
    return new Promise = function(resolve, reject){
    conn.query(sql, function(err, result, fields){
        if(err){
            reject(err);
        }else{
            resolve(result);
        }
    });
    conn.end();
   }
}

module.exports = {
    getUserList
}