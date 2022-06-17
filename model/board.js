const getConnection = require('../config/pool');

const sql2 = 'Select * From Board';

const getBoardList = async function() {
    const connectionPool = getConnection()
    try{
        console.log(2);
        console.log(getConnection);
        getConnection(async (conn) => {
            console.log(3);
            await conn.query(sql2, function(err, rows, fields) {
                if(err) console.log('query is not excuted. select fail...\n' + err);
                else {
                    console.log(rows);
                    return rows;
                }
            });
    
            conn.release();
        })
    } catch(err){
        console.log(err);
    }
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