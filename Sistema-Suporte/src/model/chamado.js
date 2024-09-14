const sequelize = require('sequelize');
const database = require('../config/db');

const chamado = database.define('Chamado', {
    IDChamado: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Cliente: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    Descricao: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    Tipo: {
        type: sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = chamado;