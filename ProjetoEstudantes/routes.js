//Iniciando Route do Express
const express = require('express');
const route = express.Router();

//Importando controllers
const home = require('./src/controllers/home');
route.post('/index', home.pagInicialPost);
//Iniciado rotas
route.get('/', home.pagInicialGet);


const cadastro = require('./src/controllers/cadastro');
route.get('/turmas', cadastro.sala);
route.post('/turmas', cadastro.salaInsert);


const cadAluno = require('./src/controllers/cadAluno');
route.get('/alunos', cadAluno.aluno);
//route.post('/alunos', cadAluno.alunoInsert);


const multer = require("multer"); // Recebendo arquivo do multer que criamos
const config = require('./src/config/multer'); // Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
route.post('/alunos', multer(config).single('flImage'), cadAluno.alunoInsert);

const editar = require('./src/controllers/editar');
route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('flImage'), editar.adicionar);

module.exports = route;