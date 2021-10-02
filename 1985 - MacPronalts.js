var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let compra;
let produto;
let qtProduto;
let soma = 0;

if(num >= 1 && num <= 5){
    while(num > 0){
    compra = (dados.shift()).split(" ");
        produto = parseInt(compra.shift());
        qtProduto = compra.shift();
    if(qtProduto >=1 && qtProduto <= 500){
        if(produto == 1001){
            soma = soma + qtProduto * 1.50;
        }else if(produto == 1002){
            soma = soma + qtProduto * 2.50;
        }else if(produto == 1003){
            soma = soma + qtProduto * 3.50;
        }else if(produto == 1004){
            soma = soma + qtProduto * 4.50;
        }else if(produto == 1005){
            soma = soma + qtProduto * 5.50;
        }
    }
        num--;
    }
}
console.log(soma.toFixed(2));