/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  let leftStr1 = 0;
  let leftStr2 = 0;

  while (leftStr1 < str1.length && leftStr2 < str2.length) {
    if (str1[leftStr1] === str2[leftStr2]) {
      ++leftStr1;
    }
    ++leftStr2;
  }

  return leftStr1 === str1.length;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
