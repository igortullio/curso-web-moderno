console.log(typeof Object)

class Produto{}
console.log(typeof Produto)


//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 4, 5, 6)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

//Armazenando uma funcao em uma variável
const imprimirSomar = function (a,b) {
    console.log(a + b)
}
imprimirSomar(2,3)

//Armazenando uma funcao arrow em uma variável
const somar = (a, b) => {
    return a + b
}
console.log(somar(2, 3))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))