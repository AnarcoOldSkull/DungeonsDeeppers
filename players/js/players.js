import conteudinho from "../log/event.json" assert { type: 'json' };

 document.getElementById("apresentation").innerHTML = conteudinho.descricao;
 document.getElementById("possibilidades").innerHTML += `<div>${conteudinho.w}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${conteudinho.d}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${conteudinho.s}</div>`;
 document.getElementById("possibilidades").innerHTML += `<div>${conteudinho.a}</div>`;
