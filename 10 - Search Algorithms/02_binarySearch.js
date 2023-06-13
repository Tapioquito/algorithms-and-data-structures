/*

            BINARY SEARCH

    It's a much FASTER form of search
    
    Rather than eliminating one element at a time,
    you can eliminate HALF of the remaining elements 
    at a time

    Binary Search ONLY works on SORTED arrays!

            DIVIDE AND CONQUER STRATEGY
    
            BINARY SEARCH PSEUDO CODE

    1) This function accepts a SORTED array and a value
    2) Create a left pointer at the start of the array and 
    a right pointer at the end
    3) While the left pointer comes before the right pointer:
        - Create a ointer in the MIDDLE
        - If your find the value you want, return the INDEX;
        - If the value is too small, move the left pointer up;
        - If the value is too high, move de right poitner down;
    4) If you never find the value, just return -1;
 
*/

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  // console.log(`MIddle: ${middle}`);

  while (arr[middle] !== val && start <= end) {
    //   console.log(`Middle: ${middle}`);
    console.log(`Middle: ${arr[middle]}`);
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
//console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1
