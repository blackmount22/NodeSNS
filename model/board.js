var db_config = require('../config/database.js');
var conn = db_config.init();

db_config.connect(conn);

const getBoardList = async function(){
    var sql = 'SELECT * FROM BOARD';
    conn.query(sql, function(err, rows, fields){
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else console.log(rows);
    });
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