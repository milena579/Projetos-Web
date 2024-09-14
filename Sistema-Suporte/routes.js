const express = require('express');
const route = express.Router();

const home = require('./src/controllers/home')
route.get('/', home.paginaInicialGet);

const chamado = require('./src/controllers/chamado')
route.get('/tipoChamado/:tipo', chamado.chamadoGet);
route.post('/tipoChamado/:tipo', chamado.chamadoInsert)
route.post('/chamadoEditado/:id', chamado.chamadoUpdate)



module.exports = route;