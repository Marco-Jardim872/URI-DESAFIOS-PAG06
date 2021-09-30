var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let cA = parseInt(dados.shift());
let cB = parseInt(dados.shift());

if((cA,cB) >= 1 && (cA,cB) <= 13){
    if (cA == cB) {
        console.log(cA);
    }else if (cA > cB) {
        console.log(cA);
    }else if (cA < cB) {
        console.log(cB);
    }
}