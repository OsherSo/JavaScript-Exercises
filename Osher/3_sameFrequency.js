/*
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
*/

const numOfDigits = (num) => {
  if (num === 0) {
    return 0;
  }

  return 1 + numOfDigits(Math.floor(num / 10));
}

function sameFrequency(num1, num2) {
  if (numOfDigits(num1) !== numOfDigits(num2)) {
    return false;
  }

  const lut1 = {};
  const lut2 = {};

  while (num1 !== 0) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;

    lut1[digit1] = ++lut1[digit1] || 1;
    lut2[digit2] = ++lut2[digit2] || 1;

    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }

  for (const num in lut1) {
    if (lut1[num] !== lut2[num]) {
      return false;
    }
  }

  return true;
}
