/*
            HOW DO WE SEARCH?

    Given an array, the simplest way to search for a value 
    is to look at every element in the array and check if 
    it's the value we want.

    Javascript already has some search methods:
        - indexOf;
        - includes;
        - find;
        - findIndex;



*/

//CAIO:

function linearSearch(arr, val) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));
