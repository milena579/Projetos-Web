var proximo = document.getElementById("proximo");
var anterior = document.getElementById("anterior");
var play = document.getElementById("play-pause");

var capitulo = document.getElementById("capitulo");
var num = capitulo.innerText.slice(9);
var audio = document.getElementById("audio-capitulo");

function depois(){
    num++
    
    if (num == 11)
        num = 1;
    if (num == 0)
        num = 10
    
    capitulo.innerText = 'Capitulo ' + num
    proximoCap();
    
}

function antes(){
    num--
    if(num == 0)
        num = 1
    capitulo.innerText = 'Capitulo ' + num
    proximoCap();
}

var cont = 0

function playsound(){
    if(cont%2){
        play.className = "bi bi-pause-circle-fill";
        audio.play();

    } else{
        play.className = "bi bi-play-circle-fill";
        audio.pause();
    }
    cont++
}


function proximoCap(){
    let caminho = "./books/dom-casmurro/" + num + ".mp3"
    audio.src = caminho
}
