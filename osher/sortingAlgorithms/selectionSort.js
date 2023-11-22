const swap = require('./swap');

function selectionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (i !== min_index) swap(arr, i, min_index);
  }

  return arr;
}
