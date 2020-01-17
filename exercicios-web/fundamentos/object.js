const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4999.9;
console.log(prod1);

const prod2 = {
  nome: "Camisa",
  preco: 50,
  obj: {
    teste: "teste"
  }
};
console.log(prod2);

console.log(typeof Object);
console.log(typeof new Object());

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto());
