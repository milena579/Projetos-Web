const { Sequelize } = require('sequelize');
const aluno = require('../model/aluno');
const sala =  require('../model/sala');

module.exports = {
    async aluno(req, res){
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });

        // Quantidade de alunos em cada sala
        const quantAlunos = await aluno.findAll({
            raw: true,
            group: ['IDSala'],
            attributes: ['IDSala', [Sequelize.fn('count', Sequelize.col('IDSala')), 'Quant'] ]
        });


        let listaSalas = [];
        for (let i=0; i<salas.length; i++ ) {
            for (let j=0; j<quantAlunos.length; j++ ){
                if (salas[i].IDSala == quantAlunos[j].IDSala) {
                    salas[i].Capacidade -= quantAlunos[j].Quant;
                }
            }
            if (salas[i].Capacidade != 0){
                listaSalas.push(salas[i]);
            }
        }

        // Renderizando e passando o nome das salas para o front
        res.render('../views/alunos', {listaSalas});
        
    },

    async alunoInsert(req, res){
        const dados = req.body;    
        let foto = 'do-utilizador.png';
        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            Foto: foto,
            IDSala: dados.sala
        });

        res.redirect('/');
    }
}