/*

            MERGE SORT PSEUDOCODE


    - Break up the array into HALVES until you have arrays that are empty OR have one element
    - Tip: use the slice() method
    - Call the function again to break the halves into other halves
    - Keep going recursively until the arrays lengths are less than OR equal to 1
    - Once you have the smaller arrays, merge those arrays with other sorted arrays 
    until you are back at the full length of the array
    - Once the array has been merged together return the merged( and sorted) array
 
*/
//IMPLEMENTATION:

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);

  let firstHalf = mergeSort(arr.slice(0, midPoint));
  let secondHalf = mergeSort(arr.slice(midPoint));

  return merger(firstHalf, secondHalf);
};

const merger = (arr1, arr2) => {
  let newArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    } else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  return newArray;
};

console.log(mergeSort([10, 24, 76, 73, 72, 9, 1]));
