let produtos = [
    {id:1, nome:"Fone", preco: 59, categoria: "Eletrônico"}
    {id:2, nome:"Colar", preco: 89, categoria: "Acessório"}
    {id:3, nome:"Sushi", preco: 120, categoria: "Comida"}
    {id:4, nome:"Glos", preco: 45, categoria: "Maquiagem"}
    {id:1, nome:"Blush", preco: 100, categoria: "Maquiagem"}
]

let nomes = produtos.map(function(item){
    return item.nome
})
console.log(nomes)

let maquiagem = produtos.filter(function(item){
    return item.categoria === "Maquiagem"
})
console.log(maquiagem)
 let encontrado = produtos.find(function(item){
    return item.id === 3
 })
 console.log(encontrado)
 
 let nomeMaiores = produtos.filter(function(item){
    return item.preco > 500
 })