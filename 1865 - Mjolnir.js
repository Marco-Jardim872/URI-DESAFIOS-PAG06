var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

while(num>0){
  let testes = dados.shift().split(' ');
  let nome = testes.shift();
  let forca = testes.shift();
  
  if (nome == "Thor") {
    console.log("Y");
  }else {
    console.log("N");
  }
  num--;
}
