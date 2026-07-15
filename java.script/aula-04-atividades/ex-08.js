let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2025,
    cor: "Branco",
    placa: "ABC-1234"
};

console.log(carro);

delete carro.placa;

console.log(carro);
console.log("placa" in carro);