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