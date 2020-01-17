const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    rua: "Tal",
    numero: 15
  }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { rua: r, numero: num, cep: c }
} = pessoa;
console.log(r, num, c);

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
  [1, 2],
  [3, 4]
];
console.log(nota);

function randObj({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
const obj = {
  max: 50,
  min: 40
};
console.log(randObj(obj));
console.log(randObj({ min: 955 }));
console.log(randObj({}));
//console.log(randObj()) error

function randArray([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log(randArray([50, 40]));
console.log(randArray([50]));
console.log(randArray([, 10]));
console.log(randArray([]));
// console.log(randArray()) error
