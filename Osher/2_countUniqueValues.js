/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

Time Complexity - O(n)
Space Complexity - O(1)
*/

function countUniqueValues(sortedArr) {
  if (sortedArr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 0; j < sortedArr.length; ++j) {
    if (sortedArr[j] !== sortedArr[i]) {
      sortedArr[++i] = sortedArr[j];
    }
  }

  return i + 1;
}
