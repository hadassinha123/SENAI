let amigos = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 18 },
    { nome: "Maria", idade: 16 },
    { nome: "Pedro", idade: 20 }
];

let maiores = [];

amigos.forEach(amigo => {
    if (amigo.idade >= 18) {
        maiores.push(amigo);
    }
});

console.log(maiores);