function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false;
  }
  return callback(arr[0]) || someRecursive(arr.splice(1));
}
