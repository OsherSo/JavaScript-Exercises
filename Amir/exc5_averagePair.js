function averagePair(sortedArr, avg) {
  if (sortedArr.length === 0) return false;
  if (sortedArr.length === 1) return sortedArr[0] === avg;

  let left = 0;
  let right = sortedArr.length - 1;
  while (left !== right) {
    let currAvg = (sortedArr[left] + sortedArr[right]) / 2;
    if (currAvg === avg) return true;
    else if (currAvg > avg) right--;
    else left++;
  }
  return false;
}
