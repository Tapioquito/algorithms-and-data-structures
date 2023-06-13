function pureRecursion(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
    console.log(newArr);
  }
  //Pure recursiveness:
  newArr = newArr.concat(pureRecursion(arr.slice(1)));
  console.log(newArr);
  return newArr;
}
console.log(`Collected Odd Values: ${pureRecursion([1, 2, 3, 4, 5])}`);
