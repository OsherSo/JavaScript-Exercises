/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  const result = [];

  function helper(arr) {
    if (arr.length === 0) return;
    const capitalizeFirstStr = arr[0][0].toUpperCase() + arr[0].slice(1);
    result.push(capitalizeFirstStr);
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}
