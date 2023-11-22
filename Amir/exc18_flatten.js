function flatten(arr) {
  return flattenHelper([], arr);
}

function flattenHelper(flatArr, arr) {
  if (arr.length === 0) return flatArr;
  else if (!Array.isArray(arr[0]))
    return flattenHelper(flatArr.concat(arr[0]), arr.splice(1));
  else
    return flattenHelper(flatArr, arr[0]).concat(
      flattenHelper([], arr.splice(1))
    );
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));
