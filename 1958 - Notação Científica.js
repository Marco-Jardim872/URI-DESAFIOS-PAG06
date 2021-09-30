var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(',');

let neg = ((dados.join("")).toString())[0];
let n =  Number(dados.shift()).toExponential(4);
let num = n.toString();
let expo = num.replace("e", "E");
let arr = expo.split("");

if((neg === "-") && (Math.abs(n) === 0)){
    arr.splice(0,0,"-");
}else if(arr[0] !== "-"){
    arr.splice(0,0,"+");
}

if(arr.length == 10){
    arr.splice(9,0,"0");
}
console.log(arr.join(""));