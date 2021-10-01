var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let A = parseFloat(dados.shift()).toFixed(2);
let B = parseFloat(dados.shift()).toFixed(2);

let aumento = ((100 * (B - A)/A)).toFixed(2);

if((parseFloat(A) <= parseFloat(B)) && ((parseFloat(A) > 0.00) && (parseFloat(A) <= 1000.00))){
    console.log(aumento + "%");
}