var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let A = parseInt(dados.shift());
let B = parseInt(dados.shift());
let C = parseInt(dados.shift());
let D = parseInt(dados.shift());
    
if((A,B,C,D) >=1 && (A,B,C,D) <= 100){
 if((A + B > C)&&(A + C > B)&&(B + C > A)){
     console.log("S");
 }else if((A + B > D)&&(A + D > B)&&(B + D > A)){
    console.log("S");
 }else if((B + C > D)&&(B + D > C)&&(C + D > B)){
    console.log("S");
 }else if((A + C > D)&&(A + D > C)&&(C + D > A)){
    console.log("S");
 }else{
    console.log("N");
 }
}
 