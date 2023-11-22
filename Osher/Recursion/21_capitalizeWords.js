/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arr) {
  const result = [];

  function helper(arr) {
    if (arr.length === 0) return;
    result.push(arr[0].toUpperCase());
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}
