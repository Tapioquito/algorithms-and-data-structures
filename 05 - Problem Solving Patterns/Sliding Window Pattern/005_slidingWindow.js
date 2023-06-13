//VERY LAZY SOLUTION:

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(`Temp, Max: ${temp}, ${max}`);
  }
  return max;
}

//console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
//console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
//console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
//console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
//console.log(maxSubarraySum([], 4)); //NULL

//==================================================================================================

//More Performatic Solution:

function bestMaxSubarraySum(arr, num) {
  let maxSum = 0;
  //maxSum will eventually hold the maximum sum of any subarray of length "num"
  let tempSum = 0;
  //tempSum will hold the sum of the current subarray being examined.

  if (arr.length < num) return null;
  //Check if the length of arr is less than num.
  //If so, return null, since there cannot be any subarrays of length num in arr.

  for (let i = 0; i < num; i++) {
    //Using a for loop, sum up the first num elements in arr and store the result in maxSum.
    //This is our initial maximum sum.
    maxSum += arr[i];
  }

  tempSum = maxSum;
  //tempSum will now recieve maxSum
  for (let i = num; i < arr.length; i++) {
    //Using another for loop, iterate over the rest of arr, starting from index "num".
    // console.log("Segundo loop");
    // console.log(`num: ${num}`);
    // console.log(`arr[i]: ${arr[i]}`);
    // console.log(`arr[i - num] + arr[i]: ${arr[i - num]}`);
    tempSum = tempSum - arr[i - num] + arr[i];
    //Within the loop, update tempSum by subtracting the value at "i - num" and adding the value at" i".
    // This represents "sliding" the subarray one index to the right.

    maxSum = Math.max(maxSum, tempSum);
    //se the Math.max function to update maxSum with the larger of its current value and tempSum.
    //This will keep track of the maximum sum seen so far.
  }
  return maxSum;
  //After the loop has finished,
  //maxSum will hold the maximum sum of any subarray of length num in arr, so return it.
}

//console.log(bestMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(bestMaxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
//console.log(bestMaxSubarraySum([4, 2, 1, 6], 1)); //6
//console.log(bestMaxSubarraySum([4, 2, 1, 6, 2], 4)); //13
//console.log(bestMaxSubarraySum([], 4)); //NULL

// function slidingWindow(arr, num) {

//   let minLength = 0;
//   if (arr.length < num) return null;
//   //the current range and sum of our sliding window:

//   let start = 0;
//   let currentSum = 0;
//   let end = 0;

//   //Extend our sliding window until our criteria is met:

//   while (end < arr.length) {
//     currentSum += arr[end];
//     end += 1;
//     //Then contract the sliding window until it no longer meets out condition:
//     while (start < end && currentSum >= x) {
//       currentSum -= arr[start];
//       start += 1;
//     }
//     minLength = Math.min(minLength,)
//   }
// }
// console.log(slidingWindow([1, 2, 3, 4, 5, 6]));
