function compras(tra1, tra2) {
  const comprarSorvete = tra1 || tra2;
  const comprarTv50 = tra1 && tra2;
  //const comprarTv32 = !!(tra1 ^ tra2)
  const comprarTv32 = tra1 != tra2;
  const manterSaudavel = !comprarSorvete;

  return {
    comprarSorvete,
    comprarTv50,
    comprarTv32,
    manterSaudavel
  };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
