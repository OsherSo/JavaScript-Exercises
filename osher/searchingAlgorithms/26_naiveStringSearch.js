function naiveStringSearch(bigStr, smallStr) {
  let count = 0;
  for (let i = 0; i < bigStr.length; ++i) {
    for (let j = 0; j < smallStr.length; ++j) {
      if (smallStr[j] !== bigStr[i + j]) break;
      else if (j === smallStr.length - 1) ++count;
    }
  }

  return count;
}
