//Creating POINTERS or values that correspond to and index or position
//and move towards the beginning,
//end or middle based on a CERTAIN CONDITION

//VERY efficient for solving problems with minimal space complexity as well

[-4, -3, -2, -1, 0, 1, 2, 5];
("iuhauihdiuashdsaiajiajis");

//Example:
//Write a function called sumZero which accepts a SORTED array of integers.
//The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined
// if a pair dos not exist

//==================================================================================

//TAPIOCA's Solution

function sumZero(arr) {
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sorted);
  let sum = [];
  for (let i = 0; i < sorted.length; i++) {
    console.log(`Sorted[0]: ${sorted[0]}`);
    console.log(`Sorted[i+1]: ${sorted[i + 1]}`);
    if (sorted[0] + sorted[i + 1] === 0) {
      sum.push(sorted[0]); //
    } else {
      return undefined;
    }
  }
}
//console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3] não consegui
//console.log(sumZero([-2, 0, 1, 3])); //undefined OK
//console.log(sumZero([1, 2, 3])); // undefined OK

//==============================================================================

// Colt Solution (naive):
// Time Complexityu: O(N^2);
// Space Complexity: O(1);
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //for dentro de for
      //ou seja, uma merda
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
//console.log(naiveSumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3] OK
//console.log(naiveSumZero([-2, 0, 1, 3])); //undefined OK
//console.log(naiveSumZero([1, 2, 3])); // undefined OK

//==============================================================================

//Time Complexity - O(N);
//Space Complexity - O(1);
function refactoredSumZero(arr) {
  let left = 0;
  let right = arr.length - 1; //pega o último elemento do array

  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log(`Left:${left}`);
    console.log(`Right: ${right}`);
    console.log(`SUm: ${sum}`);

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//console.log(refactoredSumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3] OK
//console.log(refactoredSumZero([-2, 0, 1, 3])); //undefined OK
//console.log(refactoredSumZero([1, 2, 3])); // undefined OK

console.log(refactoredSumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); //[-3,3] OK
