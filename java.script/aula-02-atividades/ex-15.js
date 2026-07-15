let nome = "Hadassa";
let idade = 15;
let altura = 1.65;
let peso = 58;

let imc = peso / (altura * altura);

console.log(`IMC: ${imc}`);
console.log(`É maior de idade? ${idade >= 18}`);
console.log(`IMC abaixo de 25? ${imc < 25}`);
console.log(`Nome tem mais de 3 letras? ${nome.length > 3}`);