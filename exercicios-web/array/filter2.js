Array.prototype.filter2 = function(callback) {
  const retorno = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      retorno.push(this[i]);
    }
  }
  return retorno;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad", preco: 4199, fragil: true },
  { nome: "Copo Vidro", preco: 12.49, fragil: true },
  { nome: "Copo Plástico", preco: 18.99, fragil: false }
];

console.log(produtos.filter2(p => p.fragil).filter2(p => p.preco >= 500));
