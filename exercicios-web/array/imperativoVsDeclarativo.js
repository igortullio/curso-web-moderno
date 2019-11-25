const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativa
let tota1 = 0
for (let i = 0; i < alunos.length; i++) {
    tota1 += alunos[i].nota
}
console.log(tota1 /  alunos.length)

// Declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)