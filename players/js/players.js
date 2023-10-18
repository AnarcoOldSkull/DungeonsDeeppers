//import conteudinho from "../log/event.json" assert { type: 'json' };

var conteudinho = await fetch('log/event.json')
                            .then((response) => response.json())
                            .then((json) => {
                                var conteudinho = json;
                                return conteudinho});

function insertConteudo(dados){
 document.getElementById("apresentation").innerHTML = dados.descricao;
 document.getElementById("possibilidades").innerHTML += `<div id="west"><button id="bwest" onclick="moveu_oeste()">${dados.a}</button></div>
                                                         <div id="division">
                                                         <div id="cocontainer">
                                                         <div id="north"><button id="bnorth" onclick="moveu_norte()">${dados.w}</button></div>
                                                         <div id="south"><button id="bsouth" onclick="moveu_sul()">${dados.s}</button></div>
                                                         </div>
                                                         </div>
                                                         <div id="east"><button  id="beast" onclick="moveu_leste()">${dados.d}</button></div>`;
 //starting.play();
}

insertConteudo(conteudinho);