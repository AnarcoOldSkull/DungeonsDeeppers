function require_gamelist(){
$.ajax({
    dataType: "json",
    url: "log/gamelist.json",
    type: 'GET',
    success: function(data){
        var opt = "<option>Selecione o Projeto</option>";
        for(i in data){
            opt+=`<option value="${data[i]}">${data[i]}</option>`;
        }
        sel =`<label id="forprojeto">Projeto:</label><select id="projeto">${opt}</select><button id="novoprojeto" onclick="criarProjeto()">Novo</button>`;
        document.getElementById(`apresentation`).innerHTML+=sel;
    }
  });
}
function insertion(){
    var opcoesx="";
    var opcoesy="";
    for(i=-250;i<=250;i++){
          opcoesx+=`<option value="${i}">${i}</option>`;  
    }
    for(j=-250;j<=250;j++){
          opcoesy+=`<option value="${j}">${j}</option>`;  
    }
    select =`<label id="forpositionx">Posição X:</label><select id="positionx">${opcoesx}</select>`;
    select +=`<label id="forpositiony">Posição y:</label><select id="positiony">${opcoesy}</select>`;
    document.getElementById(`apresentation`).innerHTML+=select;
}
$(document).ready(function(){
    require_gamelist();
    insertion();
});
