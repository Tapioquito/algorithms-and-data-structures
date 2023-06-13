function factorial(num) {
  if (num === 0) return 1;
  let result = 0;
  result = num * factorial(num - 1);
  return result;
}
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(4)); //24
console.log(factorial(7)); //5040
