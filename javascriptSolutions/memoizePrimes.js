function memoizePrimes(n, arr = [1], limit = 2) {
  if (n < 2) {
    return [];
  }

  if (limit >= n) {
    arr.push(n);
    return arr;
  }

  if (n % limit === 0) {
    const factors = arr.filter(x => limit % x === 0);

    if (factors.length === 1) {
      arr.push(limit)
    }
  }
  
  return memoizePrimes(n, arr, limit + 1);
}
