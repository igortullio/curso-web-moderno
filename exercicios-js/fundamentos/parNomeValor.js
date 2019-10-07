const saudacao = "Opa" //contexto léxico

function exec() {
    const saudacao = "Falaaaa"
    return saudacao
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)