var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let num = parseInt(dados.shift());
let q = Math.trunc(num / 16);
let r = num % 16;
let arr=[];
let arrHex=[];
let arrQ=[];

arr.push(r);

while ( Math.trunc(q)!== 0){  
    arr.push(Math.trunc(q % 16));
    arrQ.push(Math.trunc(q));
    q /= 16;
}

if( Math.trunc(q)!== 0){
    arr.pop();
    let Q = arrQ.pop();
    arr.push(Q);
}

for(let i of arr) {
    if(i == 10) {
        i = "A";
    }else if(i == 11) {
        i = "B";
    }else if(i == 12) {
        i = "C";
    }else if(i == 13) {
        i = "D";
    }else if(i == 14) {
        i = "E";
    }else if(i == 15) {
        i = "F";
    }
    arrHex.push(i);
}
if(num >= 1 && num <= (2 * Math.pow(10,9))){
    console.log(arrHex.reverse().join(""));
}
 