let celsius = [0, 15, 30, 45];

let fahrenheit = celsius.map(function(temperatura) {
    return temperatura * 9 / 5 + 32;
});

console.log("Temperaturas em Fahrenheit:", fahrenheit);