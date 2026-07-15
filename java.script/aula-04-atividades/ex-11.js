let filme = {
    titulo: "Vingadores",
    diretor: "Anthony Russo",
    ano: 2019,
    genero: "Ação"
};

for (let chave in filme) {
    console.log(chave + ": " + filme[chave]);
}