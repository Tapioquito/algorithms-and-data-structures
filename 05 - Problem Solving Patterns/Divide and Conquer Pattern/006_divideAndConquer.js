// TAPIOCA'S TRY:

function tapiocaBinarySearch(arr, num) {
  // let foundIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
  //porque passou por todo o array e não encontrou nada que fizesse retornar 1!
}

// O que rolou aqui foi o que chamamos de LINEAR Search
// O Código percorrer por todo o array através de um "for" até encontrar o valor desejado.
// Como só percorre uma vez, a complexidade é de O(n), o que é ótimo!
//No entanto, isto pode ser melhorado!
//console.log(tapiocaBinarySearch([1, 2, 3, 4, 5, 6], 4)); //3
//console.log(tapiocaBinarySearch([1, 2, 3, 4, 5, 6], 6)); //5
//console.log(tapiocaBinarySearch([1, 2, 3, 4, 5, 6], 11)); //-1

//REFACTORED:

function refactoredBinarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(
  refactoredBinarySearch(
    [
      1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29, 45, 47, 49, 100, 102, 103, 344, 346,
      456, 457, 458, 912, 913, 914, 915, 916, 917, 1000,
    ],
    913
  )
);
