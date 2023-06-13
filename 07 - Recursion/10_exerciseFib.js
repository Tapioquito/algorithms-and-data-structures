function fib(num) {
  if (num <= 2) return 1;
  let nacci = fib(num - 2) + fib(num - 1);

  return nacci;
}
console.log(fib(8)); //1+1+2+3+5+8+13+21 = 54
