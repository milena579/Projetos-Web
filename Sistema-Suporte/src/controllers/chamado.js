//const { create } = require('domain');
const { where } = require('sequelize');
const chamados = require('../model/chamado');

module.exports = {
    async chamadoGet(req, res){
        let tipo = req.params.tipo;
        res.render('../views/chamado', {tipo})
    },

    async chamadoInsert(req, res){
        const dados = req.body;

        let tipo = req.params.tipo;

        await chamados.create({
            Cliente: dados.cliente,
            Descricao: dados.descricao,
            Tipo: tipo
        });
        
        res.redirect('/')
    },

    async chamadoUpdate(req, res){
        const dados = req.body;
        console.log(dados);

        let id = req.params.id;

        await chamados.update({
            Descricao: dados.descricao,
            Tipo: dados.tipo
        }, {where:{IDChamado: id}});

        res.redirect('/')
    }
}

