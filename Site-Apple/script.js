function trocaCor(){

    let checked = document.querySelector('input[name="opcao-cor"]:checked');
    let cor = document.getElementById(checked.id)
    
    let pegandoImgBtn = cor.parentElement.children[1].children[0].src

    pegandoImgBtn = pegandoImgBtn.split('/')
    var corRelogio = pegandoImgBtn[pegandoImgBtn.length - 1].split('.')
    corRelogio = corRelogio[0]
    console.log(corRelogio)

    let pulseira = document.getElementById("0-imagem-miniatura")
    let miniRelogio = document.getElementById("1-imagem-miniatura")
    let frenteRelogio = document.getElementById("2-imagem-miniatura")
      
     
    pulseira.src = "./imagens/opcoes-cores/imagens-"+ corRelogio +"/imagem-0.jpeg";
    miniRelogio.src = "./imagens/opcoes-cores/imagens-"+ corRelogio +"/imagem-1.jpeg";
    frenteRelogio.src ="./imagens/opcoes-cores/imagens-"+ corRelogio +"/imagem-2.jpeg";

    trocarImagem()
}


function trocarImagem(){
    let checked = document.querySelector('input[name="opcao-imagem"]:checked');
    let input = document.getElementById(checked.id)
    console.log(input)
   
    let pegandoImg = input.parentElement.children[1].children[0].src
    console.log(pegandoImg)

    let visualizacao =  document.getElementById("imagem-visualizacao")
    visualizacao.src = pegandoImg
}
