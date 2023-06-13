function productOfArray(arr) {
  if (arr.length === 0) return 1;

  let result;

  result = arr[0] * productOfArray(arr.slice(1));

  return result;
}

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60
