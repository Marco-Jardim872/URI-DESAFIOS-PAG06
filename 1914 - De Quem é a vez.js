var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

while(num > 0){
  let jogadores = (dados.shift()).split(" ");
  let valores = (dados.shift()).split(" ");
  let N = parseInt(valores[0]);
  let M = parseInt(valores[1]); 
  let soma = N + M;
  let jog1 = jogadores.shift();
  let escolhaJog1 = jogadores.shift();
  let jog2 = jogadores.shift();
  let escolhaJog2 = jogadores.shift();

  if((num < 1 || num > 100) || (N < 1 || N > Math.pow(10,9)) || (M < 1 || M > Math.pow(10,9)) ){
    break;
  }
  if(((jog1.length) - 1 > 100) || ((jog2.length) - 1 > 100)){
    break;
  }
  if((soma % 2 === 0) && (escolhaJog1 == "PAR") || ((soma % 2 !== 0) && (escolhaJog1 == "IMPAR"))) {
      console.log(jog1);
  }else {
      console.log(jog2);
  }
 num--;
}


 