var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let acord = (dados.shift()).split("");
    let horaAcord = parseInt(acord[0]);
    let minAcord = parseInt(acord[2] + acord[3]);
    let tempoTerminal = 1;
    let atraso = 60 * (horaAcord + tempoTerminal - 8) + minAcord;

    if(horaAcord >= 5 && horaAcord <= 9){
        if(horaAcord < 7){  
        console.log("Atraso maximo: " + 0);
        }else if(horaAcord >= 7){
            console.log("Atraso maximo: " + atraso);
        }
    }
}