function countUniqueValues(sortedArr) {
  if (sortedArr.length === 0) return 0;

  let i = 0;
  let j = 1;
  while (j < sortedArr.length) {
    if (sortedArr[j] !== sortedArr[i]) {
      sortedArr[++i] = sortedArr[j];
    }
    ++j;
  }

  return i + 1;
}
