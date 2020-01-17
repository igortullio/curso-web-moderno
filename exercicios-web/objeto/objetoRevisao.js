// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Genetica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Igor",
    idade: 22,
    endereco: {
      rua: "Tal",
      numero: 10
    }
  },
  condutores: [
    {
      nome: "Júnior",
      idade: 19
    },
    {
      nome: "Ana",
      idade: 40
    }
  ],
  calcularValorSeguro: function() {
    // ...
  }
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["rua"] = "Sei lá";
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
