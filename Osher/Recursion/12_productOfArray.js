/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  let product = 1;

  function helper(arr) {
    if (arr.length === 0) return;
    product *= arr[0];
    helper(arr.slice(1));
  }

  helper(arr);
  return product;
}
