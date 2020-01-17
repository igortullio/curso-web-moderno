const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function(elemento, indice, array) {
  console.log(`${indice + 1}) ${elemento}`);
  console.log(array);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);
