/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  let reverseStr = '';

  function helper(str) {
    if (str.length === 0) return;
    reverseStr += str.slice(-1);
    helper(str.slice(0, -1));
  }

  helper(str);

  return reverseStr;
}
