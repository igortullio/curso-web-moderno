function getPreco(imposto = 0, moeda = `R$`) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const produto = {
    nome: `Notebook`,
    preco: 7000,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

const carro = { preco: 20000, desc: 0.2 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, `$`))
console.log(getPreco.apply(global, [0.17, `$`]))