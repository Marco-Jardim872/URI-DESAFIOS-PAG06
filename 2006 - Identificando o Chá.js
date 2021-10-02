var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numCha = parseInt(dados.shift());
let res = dados.shift().split(" ");
let cont = 0;

if(numCha >=1 && numCha <= 4){
    for (let i = 0; i < res.length; i++) {
        if((res[i] == numCha) && (res[i] >= 1) && (res[i] <= 4)){
            cont++;
        }
    }
}
console.log(cont);