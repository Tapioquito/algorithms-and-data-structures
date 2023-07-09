const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start]; //0

  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swapper(arr, swapIdx, i);
      console.log(arr);
    }
  }
  swapper(arr, start, swapIdx);
  return swapIdx;
};
const swapper = (arr, idx1, idx2) => {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
};
console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3])); // index of 3
