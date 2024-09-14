const sequelize = require('sequelize')

const database = new sequelize('AulaTeste', 'Teste', '123',
    {
        dialect: 'mssql', host:'localhost', port: 53993
    });
    
database.sync();

module.exports = database;