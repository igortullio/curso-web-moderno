const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop()
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") //adiciona na primeira posição
console.log(pilotos)

pilotos.splice(2, 0, "Bottas",  "Massa") // adicionar na posição 2 e não remover nada
console.log(pilotos)

pilotos.splice(3, 1) // não adicionar nada e remover posição 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do 1 até o 4(sem incluir)
console.log(algunsPilotos2)

