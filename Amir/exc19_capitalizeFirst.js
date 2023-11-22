function capitalizeFirst(arr) {
  if (arr.length === 0) return arr;
  else
    return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(
      capitalizeFirst(arr.splice(1))
    );
}
