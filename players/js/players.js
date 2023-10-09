function configuration(){
        alert("entrando");
}
document.addEventListener('keyup',function (event){
    if(event.key === "Escape"){
        configuration();
    }
    if(event.key === "a"){
        moveu_oeste();
    }
    if(event.key === "s"){
        moveu_sul();
    }
    if(event.key === "w"){
        moveu_norte();
    }
    if(event.key === "d"){
        moveu_leste();
    }
    if(event.key === "m"){
        acessar_mapa();
    }
    if(event.key === "i"){
        acessar_inventario();
    }
}) ;

function moveu_oeste(){
    alert("moveu oeste");
}
function moveu_sul(){
    alert("moveu sul");
}
function moveu_norte(){
    alert("moveu norte");
}
function moveu_leste(){
    alert("moveu leste");
}
function acessar_mapa(){

    for(i=0;i<20;i++){
        for(j=0;j<20;j++){
            document.getElementById("apresentation").innerHTML += criaElementoDiv(i,j);
            
        }
    }
}
function criaElementoDiv(eixox,eixoy){
    return `<div class="grindando" id="position${eixox}-${eixoy}">${eixox}|${eixoy}</div>`;
}
function acessar_inventario(){
    alert("Acessou o inventario");
}