var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let horaS = parseInt(dados.shift());
let tempoViagem = parseInt(dados.shift());
let fuso = parseInt(dados.shift());
let horaL = (horaS + tempoViagem + fuso);

if((horaS >= 0 && horaS <= 23) && (tempoViagem >= 1 && tempoViagem <= 12) && (fuso >= -5 && fuso <= 5)){
    if(horaL > 24){
    console.log(horaL - 24);
    }else if(horaL > 0 && horaL < 24){
        console.log(horaL);
    }else if(horaL < 0){
        console.log(24 + horaL);
    }else if(horaL === 24 || horaL === 0){
        horaL = 0;
        console.log(horaL);
    }
}