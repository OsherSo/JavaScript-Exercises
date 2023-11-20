/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lut = {};
  for (const char of str1) {
    lut[char] = ++lut[char] || 1;
  }

  for (const char of str2) {
    if (!lut[char]) {
      return false;
    }
    --lut[char];
  }

  return true;
}
