/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let max = 0;
  for (let i = 0; i < n; ++i) {
    max += arr[i];
  }

  let temp = max;
  for (let i = n; i < arr.length; ++i) {
    temp = temp + arr[i] - arr[i - n];
    max = Math.max(temp, max);
  }

  return max;
}
