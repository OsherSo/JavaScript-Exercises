function findLongestSubstring(str) {
  let maxLength = 0;
  let currLength = 0;
  const lut = {};
  for (let i = 0; i < str.length; i++) {
    if (!lut[str.charAt(i)]) {
      lut[str.charAt(i)] = 1;
      ++currLength;
    } else {
      maxLength = Math.max(maxLength, currLength);
      currLength = 0;
    }
  }
}
