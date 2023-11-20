function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  const size = num;
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }
  while (num < arr.length) {
    const prev = arr[num - size];
    const next = arr[num];
    currentSum -= prev;
    currentSum += next;
    num++;
    currentSum > maxSum ? (maxSum = currentSum) : maxSum;
  }
  return maxSum;
}
