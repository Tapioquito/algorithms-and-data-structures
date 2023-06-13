function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); //120: 5 * 4 * 3 * 2 * 1
