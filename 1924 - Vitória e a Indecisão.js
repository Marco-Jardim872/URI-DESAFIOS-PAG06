var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

if(num > 0 && num <= 2000){
  let curso = (dados.shift());
  if((curso.length - 1 >= 1) && (curso.length - 1 <= 100)) {
    console.log("Ciencia da Computacao");
  }
}