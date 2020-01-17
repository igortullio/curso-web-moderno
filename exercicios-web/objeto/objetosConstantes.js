// pessoa -> 123 -> {...}
const pessoa = {
  nome: "Igor"
};
pessoa.nome = "Tullio";

// pessoa -> 456 -> {...}
// pessoa = {nome: "Ana"}

Object.freeze(pessoa);
pessoa.nome = "Maria";
pessoa.end = "End";
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({
  nome: "João"
});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
