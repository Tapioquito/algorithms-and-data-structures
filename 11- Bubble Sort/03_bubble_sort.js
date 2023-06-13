function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapper(arr, j, j + 1);
      }
    }
    console.log("Demos uma volta!");
  }
  return arr;
}

function swapper(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

//console.log(bubbleSort([29, 10, 14, 30, 37, 14, 18]));

console.log(bubbleSort([5, 3, 4, 2, 1]));
