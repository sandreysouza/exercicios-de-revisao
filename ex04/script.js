var operacao = prompt("Digite a operação ( + | - | * | / ):");

var num1 = Number(prompt("Digite o primeiro número:"));
var num2 = Number(prompt("Digite o segundo número:"));

var resultado;

if (operacao == "+") {
    resultado = num1 + num2;
} else if (operacao == "-") {
    resultado = num1 - num2;
} else if (operacao == "*") {
    resultado = num1 * num2;
} else if (operacao == "/") {
    resultado = num1 / num2;
} else {
    alert("Operação inválida");
}

alert("Resultado: " + resultado);

console.log("Resultado:", resultado);


//SANDREY CRISTHIAN MOREIRA DE SOUZA