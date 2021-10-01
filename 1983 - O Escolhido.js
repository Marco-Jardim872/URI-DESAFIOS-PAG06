var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numAlunos = parseInt(dados.shift());
let totalAlunos = [];
let alunos = {};
let aluno;
let mat;
let nota;
let notasAlunos=[];
let maiorNota;

if(numAlunos >= 3 && numAlunos <= 100){
    while(numAlunos > 0){
        aluno = (dados.shift()).split(" ");
        mat = parseInt(aluno.shift());
        nota = parseFloat(aluno.shift()).toFixed(1);
        if(nota >= 0 && nota <= 10 && mat > 0 && mat < 1000000){
            alunos.mat = mat;
            alunos.nota = nota;
            totalAlunos.push(alunos);
            alunos = {};
        }
        numAlunos--;
    }
    
    for(let i = 0; i < totalAlunos.length; i++) {
    notasAlunos.push(parseFloat(totalAlunos[i].nota).toFixed(1));
    }
    notasAlunos.sort((a,b)=> b -a);
    maiorNota = notasAlunos[0];
    for(let i = 0; i < totalAlunos.length; i++) {
        if((totalAlunos[i].nota == maiorNota) && (maiorNota >= 8)) {
            console.log(totalAlunos[i].mat);
        }else if(maiorNota < 8){
            console.log("Minimum note not reached");
            break;
        }
   
    }
    
}