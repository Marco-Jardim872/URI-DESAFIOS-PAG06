var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let arr = (dados.shift().split(" "));
let altPulo = parseInt(arr.shift());
let numCanos = parseInt(arr.shift());
let altCanos =(((dados.shift()).trim()).split(" "));
let difAltCanos = [];

if( ((altPulo >= 1) && (altPulo <= 5)) && ((numCanos >= 2) && (numCanos <= 100))) {
    
        let verAltCan = altCanos.every((value)=>{
            return (value <= 10);
        });
            
            if(verAltCan){
                for(let i = 0; i < altCanos.length - 1; i++){
                    difAltCanos.push(altCanos[i+1] - altCanos[i]);
                }
            }
            
        let ver = difAltCanos.every((value)=> {
            return (value <= altPulo && value >= altPulo * (-1) ); 
        });
        if(verAltCan){
            if(ver){
                console.log("YOU WIN");
            }else{
                console.log("GAME OVER");
            }  
        }
       
}