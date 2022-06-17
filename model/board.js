const res = require('express/lib/response');
const getConnectionPool = require('../config/pool');

const getBoardList = async function(){

    const conn = await getConnectionPool.getConnection();    
    
    try{
        var sql = 'Select * From Board';
        const [result] = await conn.query(sql);
        return [result];
    }
    catch(err){
        console.log(err);
    }

    conn.release();
    return value;

    // getConnectionPool((conn) => {
    //     conn.query(sql, function(err, rows, fields) {
    //         if(err) console.log('query is not excuted. select fail...\n' + err);
    //         else {
    //             console.log(rows);
    //             return rows;
    //         }
    //     });
    // })
}

const addBoard = async function(title, content){

    const conn = await getConnectionPool.getConnection();    

    try {
        var moment = require('moment');
        var curDate = moment().toDate();
    
        var sql = 'INSERT INTO BOARD (Title, Content, RegID, RegDate) values (?, ?, "kmmun", ?)';
        var params =[title, content, curDate];
    
        conn.query(sql, params, function(err, rows, fields) {
            if(err) console.log('query is not excuted. select fail...\n' + err);
            else {
                console.log("model result : " + rows.affectedRows);
                return rows.affectedRows;
            }
        })           
    } catch(err) {
        console.log(err);
        return 0 ;
    } finally {
        conn.release();
    }
}

module.exports = {
    getBoardList,
    addBoard
}