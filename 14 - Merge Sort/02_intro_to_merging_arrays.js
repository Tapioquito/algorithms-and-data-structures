/*

                Merging Arrays!
        
    -In order to implemente merge sort, it's useful to first 
     implement a function responsible for merging two SORTED arrays.
    
     - Given two arrays wich are sorted, this helper function should create a NEW array 
     wich is also sorted, and consists of all of the elements in the two input arrays

     - This function should run in O(n + m) time and O(n + m) space 
     and SHOULD NOT modify the parameters passed to it.

    

        PSEUDO CODE

    - Create an empty array, take a look at the smallest values in each input array
    - WHILE there are still values we haven't looked at...
        - If the value in the first array is SMALLER than the value in the second array, 
        PUSH the value in the first array into our results and move on to the next value in the first array
        - If the value in the first array is LARGER than the value in the second array, 
        PUSH the value in the second array into our results and move on to the next value in the second array
        - Once we exhaust one array, push in all remaining values from the other array
*/

//Writing a funtion to merge two sorted arrays:

const mergingArrays = (arr1, arr2) => {
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
console.log(mergingArrays([1, 10, 50], [2, 14, 99, 100])); // returns [1, 2, 10, 14, 50, 99, 100 ]
