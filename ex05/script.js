var nome = prompt("Digite seu nome:");
var altura = parseFloat(prompt("Digite sua altura em cm:"));
var peso = parseFloat(prompt("Digite seu peso em kg:"));

altura = altura / 100;

var imc = peso / (altura * altura);
imc = Math.round(imc);

var classificacao;

if (imc < 16) {
    classificacao = "Baixo peso, muito grave.";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso, grave.";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso.";
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal.";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso.";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I.";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II.";
} else {
    classificacao = "Obesidade grau III";
}


alert(nome + " possui IMC igual a " + imc + " e está classificado como " + classificacao);
console.log("Nome:", nome);
console.log("IMC:", imc);
console.log("Classificação:", classificacao);