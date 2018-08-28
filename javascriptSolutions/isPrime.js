function isPrime(num) {  
  if (num < 0) {
    return false;
  }
  
  let root = Math.sqrt(num);
  
  if (Number.isInteger(root)) {
    return false;
  }
  
  if (num > 2 && num % 2 === 0) {
    return false;
  }
  
  let primeFactors = memoizePrimes(num);
  
  return (primeFactors.length === 2 && primeFactors[0] === 1 && primeFactors[1] === num);
}

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
