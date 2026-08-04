let numeros = [1, 2, 3, 4, 5, 6];

let numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Array original:", numeros);
console.log("Array dobrado:", numerosDobrados);