const req = require('express/lib/request');
const res = require('express/lib/response');
//const pool = require('../config/pool');
const getConnectionPool = require('../config/pool');

const getBoardList = async function(){
    var sql = 'Select * From Board';

    getConnectionPool((conn) => {
        conn.query(sql, function(err, rows, fields) {
            if(err) console.log('query is not excuted. select fail...\n' + err);
            else {
                console.log(rows);
                return rows;
            }
        });
    })
}

// const getBoardList = async function() {
//     var sql = 'SELECT * FROM BOARD';

//     pool.getConnection(function(err, conn){
//         if(!err) {
//             conn.query(sql, function(err, rows, fields){
//                 if(err) console.log('query is not excuted. select fail...\n' + err);
//                 else {
//                     res.render(rows);
//                     return rows;
//                 }
//             });

//             conn.release();
//         }
//     })

//     // await pool.query(sql, function(err, rows, fields){
//     //     if(err) console.log('query is not excuted. select fail...\n' + err);
//     //     else console.log(rows);
//     // });

//     // // release 처리
//     // conn.releaseConnection(pool);
// };

const addBoard = async function(title, content){
    var moment = require('moment');
    var curDate = moment().toDate();

    var sql = 'INSERT INTO BOARD (Title, Content, RegID, RegDate) values (?, ?, "kmmun", ?)';
    var params =[title, content, curDate];

    conn.query(sql, params, function(err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            return rows.affectedRows;
        }
    })           
}

module.exports = {
    getBoardList,
    addBoard
}