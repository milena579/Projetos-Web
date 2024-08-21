const sequelize = require('sequelize')
const database = require('../config/db')
const sala = require('../model/sala')

const aluno = database.define('Aluno', {
    IDAluno: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    Idade: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    Sexo: {
        type: sequelize.STRING(30),
        allowNull: false
    },
    Foto: {
        type: sequelize.STRING(50),
        allowNull: false
    }
    
});
aluno.belongsTo(sala, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'IDSala'
});

module.exports = aluno;