//Createa function that recieves a sorted array
//And counts the UNIQUE VALUES in the array
//There can be negative numbers in the Array, but it will always be sorted

//SOLUÇÃO TAPIOCA
function countUniqueValues(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let scout = i + 1;

    if (arr[i] !== arr[scout]) {
      count++;
    }
  }
  return count;
}

//console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // tem de retornar 2, pois são 2 números únicos
//console.log("---------------------------------------------------");
//console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7, pois são 7 números únicos
//console.log("---------------------------------------------------");
//console.log(countUniqueValues([])); //retorna 0
//console.log("---------------------------------------------------");
//console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4, pois são 4 números únicos
//console.log("---------------------------------------------------");

//========================================================================================================================

//Solução Colt

function realCountUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; arr.length; j++) {
    if (arr[i] !== arr[j]) {
      console.log(`i: ${arr[i]}`);
      console.log(`j: ${arr[j]}`);
      i++;
      arr[i] = arr[j];
    }
    if (arr[j] === undefined) {
      return `Valores únicos: ${i + 1}`;
    }
  }
}

console.log("---------------------------------------------------");
console.log(realCountUniqueValues([])); //0
console.log("---------------------------------------------------");
console.log(realCountUniqueValues([-2, -1, -1, 0, 1])); //4
console.log("---------------------------------------------------");
