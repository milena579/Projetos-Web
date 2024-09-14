const myModal = document.getElementById('modalEditar')
const nome = document.getElementById('cliente');
const descricao = document.getElementById('descricao');
const tipo = document.getElementById('tipo');

function editarChamado(id, cliente, descricao, tipo){
    myModal.style.display = 'block';

    let identificador = document.getElementById('id');
    identificador.value = id;

    let nome = document.getElementById('cliente')
    nome.value = cliente;
    
    let desc = document.getElementById('descricao')
    desc.value = descricao;

    let type = document.getElementById('tipo');
    type.value = tipo;

    let formEditar = document.getElementById('formEditar');
    formEditar.action = `/chamadoEditado/${id}`;

}

function fecharModal(){
    myModal.style.display = 'none'
}