/* for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i) */

const funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(() => console.log(i));
}
funcs[2]();
funcs[8]();
