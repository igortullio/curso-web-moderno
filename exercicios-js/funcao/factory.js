// Factory simples
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("Notebook", 7000))