let pessoa = { nome: 'Hadassa', idade: 15, cidade: 'Biguaçu' };

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// Resultado:
// nome: Hadassa
// idade: 15
// cidade: Biguaçu