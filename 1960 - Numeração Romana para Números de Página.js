var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('');

let num = parseInt(dados.join(""));
let tab = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM"};
let arr = [];
let rom = [];
let romFinal = [];


while(num > 0){
    for(let key in tab){
        if(key <= num){
            arr.push(key);
        }
    }
    let maiorKey = arr[arr.length - 1];
    rom.push(maiorKey);

    num -= maiorKey;
}
for(let i = 0; i < rom.length; i++){
    romFinal.push(tab[rom[i]]);
}

console.log(romFinal.join(""));