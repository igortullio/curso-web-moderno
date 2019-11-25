let contador = 1
while(contador <= 10) {
    console.log(`Contador = ${contador++}`)
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [1, 4, 6, 8]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)   
}

for (const i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 19,
    peso: 64
}
for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}