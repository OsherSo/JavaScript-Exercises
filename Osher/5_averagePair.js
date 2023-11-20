/*
Write a function called averagePair.
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
*/

function averagePair(sortedArr, targetAvg) {
  targetAvg *= 2;

  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const leftNum = sortedArr[left];
    const rightNum = sortedArr[right];
    const sum = leftNum + rightNum;

    if (sum === targetAvg) {
      return true;
    } else if (sum > targetAvg) {
      --right;
    } else {
      ++left;
    }
  }

  return false;
}
