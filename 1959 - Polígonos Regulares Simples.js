var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let N = parseInt(dados.shift());
let L = parseInt(dados.shift());
let P = N * L;
if(((N >= 3) && (N <= 1000000)) && ((L >= 1) && (L <= 4000))){
    console.log(P);
}