const { raw } = require('express');
const chamado = require('../model/chamado');

module.exports = {
    async paginaInicialGet(req, res){
        const chamados = await chamado.findAll({
            raw:true,
            attributes: ['IDChamado', 'Cliente', 'Descricao', 'Tipo']
        });

        res.render('../views/index', {chamados})
    }
}