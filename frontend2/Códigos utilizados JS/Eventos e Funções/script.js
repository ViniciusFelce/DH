let somar = function(a, b) {
    let resultado = a+b
    return resultado;
} ;

console.log(somar(1,2));







//Return simples utilizando ArrowFunction

let soma = (a, b) => a+b;

console.log(soma(1,2));







// Função como parâmetro de outra função

function somar2(a, b) {
     console.log(a+b);
}

function executor(func) {
    func(1,2);
}

executor(somar2)