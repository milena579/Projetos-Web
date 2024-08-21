const sequelize = require('sequelize');

//configurações da base de daods
const database = new sequelize('AulaJs', 'AulaJs', 'senha123456789',
    {
        dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();

module.exports = database;