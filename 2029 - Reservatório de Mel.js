var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let volume = parseFloat(dados.shift());
    let diam = parseFloat(dados.shift());
    if(volume,diam >= 1.00 && volume <= 10000.00 && diam <= 100.00){
        let raio = (diam/2);
        let area = (3.14 * raio * raio);
        let altura = (volume/area);

        console.log("ALTURA = " + altura.toFixed(2));
        console.log("AREA = " + area.toFixed(2));
    }
}