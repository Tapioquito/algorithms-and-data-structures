function recursiveRange(num) {
  if (num === 0) return 0;
  let result = num;
  result += recursiveRange(num - 1);
  return result;
}
console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); //55
