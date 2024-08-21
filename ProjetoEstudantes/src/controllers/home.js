const sala =  require('../model/sala');
const aluno =  require('../model/aluno');
module.exports = {
    // async paginaInicialGet(req, res){
    //     res.render('../views/index')
    // },

    async pagInicialGet(req, res){
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto']
        });

        res.render('../views/index', {salas, alunos, id: ''});
    },

    async pagInicialPost(req, res){
        const id = req.body.nome;
        // let idSala = '' ;
        // if (idSala == null)
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where:(id? {IDSala:id}:{})
        });

        const salas = await sala.findAll({ raw: true, attributes: ['IDSala', 'Nome'] });
        res.render('../views/index', {salas, alunos, id});
    
    }
}
