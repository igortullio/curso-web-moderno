const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

const upCase = texto => texto.toUpperCase()
console.log(`Ei... ${upCase("cuidado")}!`)