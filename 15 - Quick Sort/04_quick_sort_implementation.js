const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    pivotHelper(arr, left, pivotIndex - 1);
    //right
    pivotHelper(arr, pivotHelper + 1, right);
  }

  return arr;
};

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

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
