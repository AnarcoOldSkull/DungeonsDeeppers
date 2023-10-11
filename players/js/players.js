//import conteudinho from "../log/event.json" assert { type: 'json' };

var conteudinho = await fetch('log/event.json')
                            .then((response) => response.json())
                            .then((json) => {
                                var conteudinho = json;
                                return conteudinho});

function insertConteudo(dados){
 document.getElementById("apresentation").innerHTML = dados.descricao;
 document.getElementById("possibilidades").innerHTML += `<div>${dados.w}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${dados.d}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${dados.s}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${dados.a}</div>`;
 starting.play();
}

insertConteudo(conteudinho);