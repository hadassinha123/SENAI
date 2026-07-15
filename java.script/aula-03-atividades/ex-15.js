let compras = [];

compras.push("Arroz");
compras.push("Feijão");
compras.push("Macarrão");
compras.push("Leite");
compras.push("Açúcar");

compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log(compras.includes("Arroz"));

let removido = compras.pop();
console.log("Item removido:", removido);

compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log("Total de itens:", compras.length);