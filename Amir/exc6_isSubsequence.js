function isSubsequenceRecursive(string1, string2) {
  if (string1.length === 0) return true;
  else if (string2.length === 0) return false;
  else if (string1.charAt(0) === string2.charAt(0))
    return isSubsequence(string1.slice(1), string2.slice(1));
  else return isSubsequence(string1, string2.slice(1));
}

function isSubsequenceIterative(string1, string2) {
  let i = 0;
  let j = 0;
  while (j < string2.length) {
    string1[i] === string2[j] ? ++i : i;
    ++j;
  }
  return i === string1.length;
}
