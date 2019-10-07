const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const ava1 = 9.8585
const ava2 = 6.5334

const total = ava1 * peso1 + ava2 * peso2
const media = total/ (peso1 + peso2)
console.log(media.toFixed(2))
console.log(typeof media)
console.log(typeof Number)
console.log(media.toString(2))


console.log(7/0)
console.log("10" / 2)
console.log(0.1 + 0.7)
console.log("Show" * 2)


const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)