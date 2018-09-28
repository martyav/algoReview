function generateFibonacciNumbers(limit, arr = []) {
  if (!limit) return arr;

  if (arr.length < 2) arr.unshift(1);
  else arr.unshift(arr[0] + arr[1]);

  return generateFibonacciNumbers(limit - 1, arr);
}
