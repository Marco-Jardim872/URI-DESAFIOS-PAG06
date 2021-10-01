var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numEstrelas = parseInt(dados.shift());
let carOrg = ((dados.shift()).split(" ")).map((value)=> parseInt(value));
let carEst = carOrg.map((value)=> value);
let result = [];

for(let i = 0; i < carEst.length;){

    if(carEst[i] % 2 !== 0){
        carEst[i] -= 1;
        i++;
    }else if(carEst[i] % 2 === 0){
        carEst[i] -= 1;
        i--;

    } if(carEst[i] === 0){
        i--;
    }
    if(i == - 1){
        break;
    } 
}
let nRoub = carEst.reduce((total, value)=>total + value, 0);
let cont = (carEst.filter((value, index)=> value === carOrg[index])).length;
result.push((numEstrelas - cont));
result.push(nRoub);

console.log(result.join(" "));