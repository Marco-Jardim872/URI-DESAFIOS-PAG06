var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let arrN = [];
let x = 1;
let cont;

while(dados.length > 1){
    let num = parseInt(dados.shift());
    if(num >=0 && num <= 200){
        while(num){
            cont = num;
            while(cont){
                arrN.push(parseInt(num));
            
                cont--;
            }
            num--;
        }
        arrN.push(0);
        if(arrN.length == 1){
            console.log("Caso " + x + ": " + arrN.length + " numero");
        }else{
            console.log("Caso " + x + ": " + arrN.length + " numeros");
        }
        console.log(arrN.reverse().join(" "));
        console.log();
        arrN = [];
        x++;
    }
   
}