const pool = require('../config/pool');

const getBoardList = async function(){
    const connectionPool = pool.getConnectionPool();
    console.log(connectionPool);

    // var sql = 'SELECT * FROM BOARD';
    // await connectionPool.query(sql, function(err, results, fields){
    //     if(err) console.log('query is not excuted. select fail...\n' + err);
    //     else console.log(results);
    // });
}

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