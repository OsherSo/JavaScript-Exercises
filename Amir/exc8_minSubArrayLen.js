function minSubArrayLen(arr, num) {
  let currLength = 0;
  let currSum = 0;
  let minLength = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (currSum < num) {
      currSum += arr[i];
      ++currLength;
    }

    while (currSum >= num) {
      minLength = Math.min(minLength, currLength);
      currSum -= arr[i - currLength + 1];
      --currLength;
    }
  }
  return minLength !== Infinity ? minLength : 0;
}
