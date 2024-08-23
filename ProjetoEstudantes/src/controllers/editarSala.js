const sala =  require('../model/sala');

module.exports = {
    async salas(req, res){
        // Recebendo o id da URL
        const parametro = req.params.id;
        const salas = await sala.findByPk(parametro, {
            raw: true, //Retorna os somente os valores de uma tabela, sem os metadados
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });
        res.render('../views/editarSala', {salas})
    },

    async adicionar(req, res){
        const dados = req.body;
        const id = req.params.id;

        // Dando upgrade nas novas informações
        await sala.update({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        },
        {
            where: { IDSala: id }
        });
        res.redirect('/');
    }

}