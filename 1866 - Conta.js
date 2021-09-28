var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
while(num > 0){
  let qtTermos = parseInt(dados.shift());
  if(qtTermos < 1 || qtTermos > 1000) {
    break;
  }else if(qtTermos % 2 === 0) {
    console.log("0");
  }else if(qtTermos % 2 !== 0) {
    console.log("1");
  }

  num--;
}