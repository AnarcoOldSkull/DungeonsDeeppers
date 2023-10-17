//import conteudinho from "../log/event.json" assert { type: 'json' };

var conteudinho = await fetch('log/event.json')
                            .then((response) => response.json())
                            .then((json) => {
                                var conteudinho = json;
                                return conteudinho});

function insertConteudo(dados){
 document.getElementById("apresentation").innerHTML = dados.descricao;
 document.getElementById("possibilidades").innerHTML += `<div id="west">${dados.a}</div>`;
 
 document.getElementById("possibilidades").innerHTML += `<div id="north">${dados.w}</div>`;
 
 document.getElementById("possibilidades").innerHTML += `<div id="division"></div>`;
 
 document.getElementById("possibilidades").innerHTML += `<div id="south">${dados.s}</div>`;
 
 document.getElementById("possibilidades").innerHTML += `<div id="east">${dados.d}</div>`;
 starting.play();
}

insertConteudo(conteudinho);