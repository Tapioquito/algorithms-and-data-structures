function power(base, exponent) {
  if (exponent === 0) return 1;

  let result = 0;
  result = base * power(base, exponent - 1);
  return result;
}

console.log(power(2, 0)); //1
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16
console.log(power(3, 4)); //81
