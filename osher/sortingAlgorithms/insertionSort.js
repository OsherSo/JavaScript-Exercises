const swap = require('./swap');

function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && currentVal < arr[j]) {
      arr[j + 1] = arr[j--];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
