var posicao=[Number(0),Number(0)];
var starting = new Audio('tracks/0_0.ogg');

function configuration(){
        document.getElementById("config_content");
}
/*
*
*Key binds
*
*/
document.addEventListener('keyup',function (event){
    if(event.key === "Escape"){
        configuration();
    }
    if(event.key === "a" || event.key==="ArrowLeft"){
        moveu_oeste();
    }
    if(event.key === "s" || event.key==="ArrowDown"){
        moveu_sul();
    }
    if(event.key === "w" || event.key==="ArrowUp"){
        moveu_norte();
    }
    if(event.key === "d" || event.key==="ArrowRight"){
        moveu_leste();
    }
    if(event.key === "m"){
        acessar_mapa();
    }
    if(event.key === "i"){
        acessar_inventario();
    }
    if(event.key === "c"){
        acessar_personagem();
    }
}) ;


function limpa_apresentation(){
    document.getElementById("apresentation").innerHTML="";
}

function criaElementoDiv(eixox,eixoy){
    return `<div class="grindando" id="position${eixox}-${eixoy}">${eixox}|${eixoy}</div>`;
}
/*
*
*Movimentation Functions
*
*/
function moveu_oeste(){
    limpa_apresentation();
    posicao[1]--;
    starting.src=`tracks/${posicao[0]}_${posicao[1]}.ogg`;
    starting.play();
}
function moveu_sul(){
    limpa_apresentation();
    posicao[0]++;
    starting.src=`tracks/${posicao[0]}_${posicao[1]}.ogg`;
    starting.play();
}
function moveu_norte(){
    limpa_apresentation();
    posicao[0]--;
    starting.src=`tracks/${posicao[0]}_${posicao[1]}.ogg`;
    starting.play();
}
function moveu_leste(){
    limpa_apresentation();
    posicao[1]++;
    starting.src=`tracks/${posicao[0]}_${posicao[1]}.ogg`;
    starting.play();
}
/*
*
*Inventary Functions
*
*/
function ativaInventario(){
    limpa_apresentation();
    document.getElementById("apresentation").style.display="flex";
}
function acessar_inventario(){
    ativaInventario();
}

/*
*
*Map Functions
*
*/
function ativaMapa(){
    limpa_apresentation();
    document.getElementById("apresentation").style.display="grid";
    document.getElementById("apresentation").style.gridTemplateColumns="repeat(17, 5.88%)";
    document.getElementById("apresentation").style.gridTemplateRows="repeat(17, 5.88%)";
}
function acessar_mapa(){
    ativaMapa();
    for(i=posicao[0]-8;i<=posicao[0]+8;i++){
        for(j=posicao[1]-8;j<=posicao[1]+8;j++){
            
            document.getElementById("apresentation").innerHTML += criaElementoDiv(i,j);
            if(i==posicao[0] && j==posicao[1]){
                document.getElementById(`position${i}-${j}`).classList.add("centro");
            }
        }
    }
}
/*
*
*Character Functions
*
*/
function ativaPersonagem(){
    limpa_apresentation();
    document.getElementById("apresentation").style.display="flex";
}
function acessar_personagem(){
    ativaPersonagem();
}
