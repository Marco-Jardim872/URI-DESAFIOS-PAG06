var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numtestes = parseInt(dados.shift());

if(numtestes >= 0 && numtestes <= 1000){
    while(numtestes > 0){
        let jog1 = (dados.shift()).toString();
        let jog2 = (dados.shift()).toString();

        if(jog1.includes("ataque") && (jog2.includes("papel") || jog2.includes("pedra"))){
            console.log("Jogador 1 venceu");
        }else if(jog1.includes("pedra") && jog2.includes("papel") ){
            console.log("Jogador 1 venceu");
        }else if(jog1.includes("pedra") && jog2.includes("pedra")){
            console.log("Sem ganhador");
        }else if(jog1.includes("ataque") && jog2.includes("ataque")){
            console.log("Aniquilacao mutua");
        }else if(jog1.includes("papel") && jog2.includes("papel")){
            console.log("Ambos venceram");
        }else if(jog2.includes("ataque") && (jog1.includes("papel") || jog1.includes("pedra"))){
            console.log("Jogador 2 venceu");
        }else if(jog2.includes("pedra") && jog1.includes("papel") ){
            console.log("Jogador 2 venceu");
        }
 
        jog1 = "";
        jog2 = "";
        numtestes--;
    }
}