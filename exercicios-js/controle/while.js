function getInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let opcao = 0, num = 1
while(opcao != -1) {
    console.log(`Número de vezes: ${num++}`)
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}
console.log("Até a próxima")
