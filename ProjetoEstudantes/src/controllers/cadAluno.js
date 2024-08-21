const aluno = require('../model/aluno');
const sala =  require('../model/sala');

module.exports = {
    async aluno(req, res){
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
            });
            // Renderizando e passando o nome das salas para o front
            res.render('../views/alunos', {salas});
        
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