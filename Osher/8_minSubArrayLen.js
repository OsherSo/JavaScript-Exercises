/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Time Complexity - O(n)
Space Complexity - O(1)
*/

function minSubArrayLen(arr, n) {
  let sum = 0;
  let count = 0;
  let result = Infinity;

  for (let i = 0; i < arr.length; ++i) {
    if (sum < n) {
      sum += arr[i];
      ++count;
    }

    while (sum >= n) {
      result = Math.min(result, count);
      sum -= arr[i - count + 1];
      --count;
    }
  }

  return result !== Infinity ? result : 0;
}
