const sala = require('../model/sala');

module.exports = {
    async sala(req, res){
        res.render('../views/turmas');
    },

    async salaInsert(req, res){
        //recebe as informações do front
        const dados =  req.body;

        //criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });

        // redirecionar para a página principal
        res.redirect('/');
    }
}