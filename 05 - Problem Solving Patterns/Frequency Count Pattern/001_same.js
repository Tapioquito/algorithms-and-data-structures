//Write a function called 'same, each accepts 2 arrays;
//the function should return true if every value in
//the array has it's corresponding value squared in the second array;
//The FRQUENCY of values must be the same.

//same([1,2,3], [4,1,9]) TRUE
//same([1,2,3], [1,9]) FALSE

//same([1,2,3], [4,4,1]) FAÇSE (must be same frequency)

//NAIVE SOLUTION
//TIME COMPLEXITY N^2
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
//console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//========================================================================================

//============================= REFACTORED ===============================================
//============================= FREQUENCY COUNTER ===============================================

//TIME COMPLEXITY: O(n)

//Remember: 2 separated loops it's BETTER then 2 nested loops!
function refactored_same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(refactored_same([1, 2, 3, 2], [9, 1, 4, 4]));
