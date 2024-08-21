const aluno = require('../model/aluno');
const sala =  require('../model/sala');
const fs = require('fs');

module.exports = {
    async alunos(req, res){
        // Recebendo o id da URL
        const parametro = req.params.id;
        const alunos = await aluno.findByPk(parametro, {
            raw: true, //Retorna os somente os valores de uma tabela, sem os metadados
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });
        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        res.render('../views/editarAluno', {salas, alunos});
    },

    async adicionar(req, res){
        const dados = req.body;
        const id = req.params.id;
        // Dando upgrade nas novas informações
     
        if (req.file) {
            // Recebendo a antiga foto do aluno
            const antigaFoto = await aluno.findAll({
                raw: true,
                attributes: ['Foto'],
                where: { IDAluno: id }
            });
            // Excluindo a foto da pasta
            if (antigaFoto[0].Foto != 'usuario.png') fs.unlink(`public/img/${antigaFoto[0].Foto}`, ( err => { if(err) console.log(err); } ));
            // Update da nova foto no DB
            await aluno.update(
                {Foto: req.file.filename},
                {where: { IDAluno: id }}
            );
        }

        await aluno.update({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala
        },
        {
            where: { IDAluno: id }
        });
        res.redirect('/');
    }

}