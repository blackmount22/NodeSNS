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

module.exports = {
    getBoardList
}