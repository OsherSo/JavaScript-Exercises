/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

function flatten(arr) {
  let flattenArr = [];

  function helper(arr) {
    if (arr.length === 0) return;

    if (arr[0].length >= 1) {
      return helper(arr[0].concat(arr.splice(1)));
    } else {
      flattenArr.push(arr[0]);
      helper(arr.splice(1));
    }
  }

  helper(arr);

  return flattenArr;
}
