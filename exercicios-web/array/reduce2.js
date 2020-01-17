const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true }
];

const todosSaoBolsistas = alunos
  .map(aluno => aluno.bolsista)
  .reduce((resultado, bolsista) => resultado && bolsista);
console.log(todosSaoBolsistas);

const alguemEhBolsistas = alunos
  .map(aluno => aluno.bolsista)
  .reduce((resultado, bolsista) => resultado || bolsista);
console.log(alguemEhBolsistas);
