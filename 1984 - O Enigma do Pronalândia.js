var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = Number(dados.shift()).toPrecision();
let arr = num.split("");

console.log(arr.reverse().join(""));