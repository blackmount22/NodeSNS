module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        boardNo: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            autoIncrement: true,
            primaryKey: true,
            unique: true, // 중복금지  
        },
        content: {
            type: DataTypes.STRING(4000),
            allowNull: false,   
        },
        regID: {
            type: DataTypes.STRING(20),
            allowNull: false,   
        },
        regDate: {
            type: DataTypes.DATE,
            allowNull: false,   
        },
        chgID: {
            type: DataTypes.STRING(20),
            allowNull: true,   
        },
        chgDate: {
            type: DataTypes.DATE,
            allowNull: true,   
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 세팅
    });
    
    Board.associate = (db) => {

    };
    return Board;
};