const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad", preco: 4199, fragil: true},
    {nome: "Copo Vidro", preco: 12.49, fragil: true},
    {nome: "Copo Plástico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(p => !p.fragil))

console.log(produtos.filter(p => p.fragil).filter(p => p.preco >= 500))